import { ActivityModel } from './activity.model';

/**
 * @class SportActivityModel
 * Model used to handle activity of a specific sport
 */
export class SportActivityModel {
    public sportType: string;
    public activities: ActivityModel[];
}