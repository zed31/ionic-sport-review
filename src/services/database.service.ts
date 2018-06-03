import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase';
import { DataSnapshot } from 'angularfire2/database/interfaces';

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
     * Create the year inside the database
     * @param year The year in a string format
     */
    public createYear(year: string): void {
        this.userRef.child(year).set({year});
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