import { GeolocationModel } from './geolocation.model';
import { TotalActivityModel } from './total.model';

/**
 * @class ActivityModel
 * Class used to handle the model of the activity
 */
export class ActivityModel {
    public activityName: string;
    public geolocations: GeolocationModel[];
    public total: TotalActivityModel;
}