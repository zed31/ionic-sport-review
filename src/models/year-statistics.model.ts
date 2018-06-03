import { MonthStatisticsModel } from './month-statistics.model';

/**
 * @class YearStatisticsModel
 * class used to maintain the model of the year statistics
 */
export class YearStatisticsModel {
    public yearValue: string;
    public monthStats: MonthStatisticsModel[];
}