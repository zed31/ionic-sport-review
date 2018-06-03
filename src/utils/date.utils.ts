/**
 * @class DateUtils
 * Class used to deal with date objects
 */
export class DateUtils {

    /**
     * Get the current week of the specified date
     * @param date The date being used to get the current week
     * @returns the week number as a string
     */
    public getCurrentWeek(date: Date): string {
        var onejan = new Date(date.getFullYear(), 0, 1);
        return String(Math.round((((date.getTime() - onejan.getTime()) / 86400000) + onejan.getDay() + 1) / 7));
    }

}