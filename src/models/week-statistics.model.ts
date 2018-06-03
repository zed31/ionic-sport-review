import { SportActivityModel } from './sport-activity.model';

/**
 * @class WeekStatisticsModel
 * Class used to handle statistics of the week
 */
export class WeekStatisticsModel {
    public weekValue: string;
    public sportActivities: SportActivityModel[];
}