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
    frames: ActivityFrameModel[];
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
 * @class UserStatisticsModel
 * Class used to store the statistics of an user
 */
export class UserStatisticsModel {
    key: string;
    statistics: YearStatisticsModel[];
};