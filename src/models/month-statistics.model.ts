import { WeekStatisticsModel } from './week-statistics.model';

/**
 * @class MonthStatisticsModel
 * Model used to handle the monthly statistics
 */
export class MonthStatisticsModel {
    public monthValue: string;
    public weekStats: WeekStatisticsModel[];
}