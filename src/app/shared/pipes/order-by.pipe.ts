import { DateTime } from "luxon";
import { Pipe, PipeTransform } from "@angular/core";

import { Course } from "src/app/courses-page/courses-list/models/course.model";

@Pipe({
    name: "orderByDate"
})
export class OrderByPipe implements PipeTransform {
    public transform(array: Course[]): Course[] {
        if (array && array.length) {
            return array.sort((a, b) => {
                const diff: number = DateTime.fromISO(a.creationDate)
                    .diff(DateTime.fromISO(b.creationDate))
                    .as("seconds");

                if (diff === 0) {
                    return 0;
                }
                return diff > 0 ? -1 : 1;
            });
        }
        return array;
    }
}
