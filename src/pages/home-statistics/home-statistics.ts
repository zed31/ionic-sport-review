import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { DatabaseService } from '../../services/database.service';

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
        console.log('Connected with the user', this.authService.userAuthenticated.uid);
        this.dbService.setupReference(this.authService.userAuthenticated.uid);
        this.dbService.createYear('2018');
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeStatisticsPage');
  }

}
