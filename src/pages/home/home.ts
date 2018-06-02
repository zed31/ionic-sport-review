import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { AuthService } from '../../services/auth.service';
import { MapPage } from '../map/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
/**
 * Class used to act as a controller for the HomePage
 * @class HomePage
 */
export class HomePage {

  /**
   * @constructor
   * @param navCtrl The controller that handles the navigation
   * @param platform The service used to handle the platform event
   */
  constructor(public navCtrl: NavController,
              public platform: Platform) {}

}
