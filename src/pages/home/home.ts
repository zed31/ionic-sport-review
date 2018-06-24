import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { AuthService } from '../../services/auth.service';
import { MapPage } from '../map/map';
import { DatabaseService } from '../../services/database.service';
import { TotalStatisticModel, UserStatisticsModel } from '../../models/statistics.model';
import { ModelService } from '../../services/model.service';
import { DateUtils } from '../../utils/date.utils';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
/**
 * Class used to act as a controller for the HomePage
 * @class HomePage
 */
export class HomePage {

  private currentWeek: string = new DateUtils().getCurrentWeek(new Date());
  private userDBService: ModelService = null;
  private weekStats: Observable<TotalStatisticModel> = of(new TotalStatisticModel());
  private pageStatisticTitle = 'Weekly statistics';

  /**
   * @constructor
   * @param navCtrl The controller that handles the navigation
   * @param platform The service used to handle the platform event
   * @param authService The service used to handle auths
   * @param dbService The service used to handle the database
   */
  constructor(public navCtrl: NavController,
              public platform: Platform,
              private authService: AuthService,
              private dbService: DatabaseService) {
    this.platform.ready().then(
      () => {
        this.dbService.setupReference(this.authService.userAuthenticated.uid);
        this.dbService.watchUserDB(
          (snapshot : firebase.database.DataSnapshot) => {
            this.userDBService = new ModelService(
              new UserStatisticsModel(
                  snapshot.child('key').val(), 
                  snapshot.child('statistics').val(),
                  snapshot.child('trainings').val()
              )
            );
            this.weekStats = of(this.userDBService.getTotalOf(this.currentWeek));
            if (!this.weekStats) {
              this.weekStats = of(new TotalStatisticModel());
            }
          }
        );
      }
    );
  }

}
