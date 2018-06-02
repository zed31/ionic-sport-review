import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, Platform } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';

declare let google: any;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})

/**
 * @class MapPage
 * Class used to handle the map in the Home page
 */
export class MapPage {

  @ViewChild('map') private mapElement: ElementRef;
  private loadMapError: string = null;
  private map: any;
  private marker: any;

  /**
   * Remove the specified marker
   */
  private deleteMarker(): void {
    this.marker.setMap(null);
    this.marker = null;
  }

  /**
   * Watch the location to detect where the user is
   */
  private watchLocations(): void {
    this.geolocation.watchPosition().subscribe(
      (newPosition: Geoposition) => {
        if (this.marker) {
          this.deleteMarker();
        }

        this.marker = new google.maps.Marker({
          position: {lat: newPosition.coords.latitude, lng: newPosition.coords.longitude},
          map: this.map,
          image: 'assets/imgs/blue-bike.png'
        })
      }
    );
  }

  /**
   * Initialize the map by creating the map at a specific position
   */
  private initMap(): void {
    this.geolocation.getCurrentPosition().then(
      (response: Geoposition) => {
        this.loadMapError = null;
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
          zoom: 15,
          center: {lat: response.coords.latitude, lng: response.coords.longitude}
        });
      },
      error => this.loadMapError = error.message
    )
    this.watchLocations();
  }

  /**
   * @constructor
   * @param navCtrl The controller that handles the navigation
   * @param geolocation The service used for the geolocation
   * @param platform The service used to handle the platform event
   */
  constructor(public navCtrl: NavController,
              private geolocation: Geolocation,
              public platform: Platform) {
      platform.ready().then(
        () => {
          this.initMap();
        }
      );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }

}
