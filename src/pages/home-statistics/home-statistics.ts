import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { DateUtils } from '../../utils/date.utils';
import { DatabaseService } from '../../services/database.service';
import { TotalStatisticModel, UserStatisticsModel } from '../../models/statistics.model';
import { ModelService } from '../../services/model.service';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

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

  @Input() public weekStats: TotalStatisticModel;
  @Input() public pageTitle: string;

  /**
   * @constructor
   * @param navCtrl The controller used to navigate through the application
   * @param navParams The controller used to pass parameter upon navigation
   * @param platform The controller used to detect platform events
   */
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private platform: Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeStatisticsPage');
  }

}
