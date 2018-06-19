import {
    ActivityDetailModel,
    ActivityFrameModel,
    TotalStatisticModel,
    WeekStatisticsModel,
    YearStatisticsModel,
    UserStatisticsModel
} from '../models/statistics.model';

/**
 * @class ModelPredicat
 * Class used to make research inside the model service of a
 * specific year and specific week
 */
export class ModelPredicat {
    year: string;
    week: string;
}

/**
 * @class ModelService
 * Class used to manipulate the models
 */
export class ModelService {
    
    /**
     * @constructor
     * @param user The statistics of the retrieved user
     */
    constructor(private user: UserStatisticsModel) {}

    /**
     * Get the statistic of a specific year
     * @param year The year being requested
     */
    public getStatisticYear(year: string): YearStatisticsModel {
        return this.user.statistics.find(
            (yearStat: YearStatisticsModel) => yearStat.year === year
        );
    }

    /**
     * Get the statistics of the current year
     */
    public getCurrentStatisticYear(): YearStatisticsModel {
        const year: string = `${new Date().getFullYear()}`;
        const yearStatistic: YearStatisticsModel = this.getStatisticYear(year);
        return !yearStatistic ? null : yearStatistic;
    }

    /**
     * Get week information about a specific year statistic model
     * @param week The week being researched
     * @param yearStat The statistic of the year being researched
     */
    public getWeekInfo(week: string, yearStat: YearStatisticsModel): WeekStatisticsModel {
        return yearStat.weeks.find(
            (weekStat: WeekStatisticsModel) => weekStat.week === week
        );
    }

    /**
     * Return the total of the weekly statistics
     * @param week The week requested for the total
     */
    public getTotalOf(week: string): TotalStatisticModel {
        const yearStatistic: YearStatisticsModel = this.getCurrentStatisticYear();
        if (!yearStatistic) {
            return null;
        }
        const weekStatistic: WeekStatisticsModel = this.getWeekInfo(week, yearStatistic);
        return weekStatistic ? null : weekStatistic.total;
    }

    /**
     * Get the total of the first statistic that match the given predicat
     * @param predicat The predicat for the requested statistic week
     */
    public getTotalIf(predicat: ModelPredicat): WeekStatisticsModel {
        const year: YearStatisticsModel = this.getStatisticYear(predicat.year);
        if (!year) {
            return null;
        }
        return this.getWeekInfo(predicat.week, year);
    }

    /**
     * Get the current statistic of the user
     */
    public getUserStatistic(): UserStatisticsModel {
        return this.user;
    }

    /**
     * Get the detail of an activity
     * @param week The week for the details of the activity
     */
    public getActivityDetail(week: string): ActivityDetailModel[] {
        const yearStatistic: YearStatisticsModel = this.getCurrentStatisticYear();
        if (!yearStatistic) {
            return null;
        }
        const weekStatistics: WeekStatisticsModel = this.getWeekInfo(week, yearStatistic);
        return weekStatistics ? null: weekStatistics.activities;
    }

    /**
     * Get the specific activity according to the good predicate
     * @param week The week to get the detail of an activity
     * @param predicate The predicate used to filter the activity details
     */
    public getActivityIf(
        week: string, 
        predicate: (activities: ActivityDetailModel[]) => ActivityDetailModel
    ): ActivityDetailModel {
        const activities: ActivityDetailModel[] = this.getActivityDetail(week);
        return predicate(activities);
    }

    /**
     * Insert new detail inside a specific week
     * @param week The week where the detail is inserted
     * @param detail The detail of an activity
     */
    public insertNewDetailIn(week: string, detail: ActivityDetailModel): void {
        const yearStat: YearStatisticsModel = this.getCurrentStatisticYear();
        if (!yearStat) {
            return ;
        }
        const weekStat: WeekStatisticsModel = this.getWeekInfo(week, yearStat);
        if (!weekStat) {
            return ;
        }
        weekStat.activities.push(detail);
    }

}