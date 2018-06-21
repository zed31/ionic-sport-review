import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { DateUtils } from '../../utils/date.utils';
import { DatabaseService } from '../../services/database.service';
import { TotalStatisticModel, UserStatisticsModel } from '../../models/statistics.model';
import { ModelService } from '../../services/model.service';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-home-statistics',
  templateUrl: 'home-statistics.html',
})

/**
 * @class HomeStatisticsPage
 * Class used to handle the user statistics inside the Home page
 */
export class HomeStatisticsPage {

  private currentWeek: string = new DateUtils().getCurrentWeek(new Date());
  private userDBService: ModelService = null;
  private weekStats: TotalStatisticModel = new TotalStatisticModel();

  /**
   * @constructor
   * @param navCtrl The controller used to navigate through the application
   * @param navParams The controller used to pass parameter upon navigation
   * @param platform The controller used to detect platform events
   * @param authService The service used to handle the authenticate user
   */
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private platform: Platform,
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
            this.weekStats = this.userDBService.getTotalOf(this.currentWeek);
            if (!this.weekStats) {
              this.weekStats = new TotalStatisticModel();
            }
          }
        );
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeStatisticsPage');
  }

}
