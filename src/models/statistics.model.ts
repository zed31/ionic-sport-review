
/**
 * @class ActivityFrameModel
 * Class used to store a frame of a simple activity
 */
export class ActivityFrameModel {
    lng: number;
    lat: number;
    alt: number;
};

/**
 * @class SportActivityModel
 * Store the frames of an activity
 */
export class SportActivityModel {
    frames: ActivityFrameModel[];
}

/**
 * @class TotalStatisticModel
 * class used to store the total of an activity
 */
export class TotalStatisticModel {
    distance: number;
    elevation: number;
    time: number;
};

/**
 * @class ActivityDetailModel
 * Class used to store the detail of an activity
 */
export class ActivityDetailModel {
    name: string;
    frames: SportActivityModel[];
    total: TotalStatisticModel;
};

/**
 * @class WeekStatisticsModel
 * Class used to store the weekly statistics
 */
export class WeekStatisticsModel {
    week: string;
    total: TotalStatisticModel;
    activities: ActivityDetailModel[];
};

/**
 * @class YearStatisticsModel
 * Class used to store statistics in a year
 */
export class YearStatisticsModel {
    year: string;
    weeks: WeekStatisticsModel[];
};

/**
 * @class TrainingModel
 * Store a list of trainings
 */
export class TrainingModel {
    sport: string;
    predicate: 'distance' | 'time';
    threshold: number;
}

/**
 * @class UserStatisticsModel
 * Class used to store the statistics of an user
 */
export class UserStatisticsModel {

    /**
     * @constructor
     * @param key The key of the user statistics
     * @param statistics The statistics of the user
     * @param trainings The list of trainings for the user
     */
    constructor(public key: string, 
                public statistics: YearStatisticsModel[],
                public trainings: TrainingModel[]) {}
};