import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, snapshotChanges } from 'angularfire2/database';
import * as firebase from 'firebase';
import { DataSnapshot } from 'angularfire2/database/interfaces';
import { Observable } from 'rxjs/Observable';
import { ModelService } from './model.service';
import {
    ActivityDetailModel,
    ActivityFrameModel,
    TotalStatisticModel,
    WeekStatisticsModel,
    YearStatisticsModel,
    UserStatisticsModel
} from '../models/statistics.model';
import { Subscriber } from 'rxjs';


@Injectable()

/**
 * @class DatabaseService
 * Class used to manage firebase database
 */
export class DatabaseService {

    private database: firebase.database.Database = null;
    private userRef: firebase.database.Reference = null;
    
    /**
     * @constructor
     * @param afDatabase The angular database reference
     */
    constructor(
        private afDatabase: AngularFireDatabase
    ) {
        this.database = this.afDatabase.database;
    }

    /**
     * Get the user statistics from the current DB
     */
    public getUserStatistics(
        onValueChanged: (snapshot: firebase.database.DataSnapshot) => void
    ): void {
        this.userRef.on('value', onValueChanged);
    }

    /**
     * Update statistics on the database
     * @param userStat The statistics updated on the database
     */
    public updateStatistics(userStat: UserStatisticsModel): void {
        this.userRef.set(userStat);
    }

    /**
     * Setup the reference of the user to get his statistics
     * or even store them
     * @param uid The uid of the authenticated user
     */
    public setupReference(uid: string): void {
        this.userRef = this.database.ref('users/' + uid);
    }

}