import { DateTime } from "luxon";
import { Pipe, PipeTransform } from "@angular/core";

import { CourseItem } from "src/app/courses-page/courses-list/models/course.model";

@Pipe({
    name: "orderByDate"
})
export class OrderByPipe implements PipeTransform {
    public transform(array: CourseItem[]): CourseItem[] {
        return array.sort((a, b) => {
            const diff: number = DateTime.fromISO(a.creationDate)
                .diff(DateTime.fromISO(b.creationDate))
                .as("seconds");

            return diff === 0 ? 0 : diff > 0 ? -1 : 1;
        });
    }
}
