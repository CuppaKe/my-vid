import { Pipe, PipeTransform } from "@angular/core";
import { Duration } from "luxon";

/**
 * Outputs durations as strings like: "1h 1 m", "2h 45m", "31m", "2h 35m", "20m"
 * @input {duration|number, format|number}:seconds, format type
 * @example: {{extraDuration | duration}} OVERDUE
 */
@Pipe({
    name: "durationFormat"
})
export class DurationFormatPipe implements PipeTransform {
    public transform(duration: number | string): string {
        const re: RegExp = new RegExp("^[0-9]+$");

        if (!duration || !re.test(duration.toString())) {
            return "";
        } else {
            const dur: Duration = Duration.fromObject({
                hours: 0,
                minutes: +duration
            })
                .normalize()
                .toObject();

            let hrs: number = dur.hours;
            let min: number = dur.minutes;

            const hoursText: string = hrs === 0 ? "" : `${hrs} h`;
            const minutesText: string = min === 0 ? "" : `${min} min`;

            return `${hoursText} ${minutesText}`.trim();
        }
    }
}
