import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

/**
 * @class LoginPageModule
 * Class used to handle the login of the application
 */
export class LoginPage {

  public login: FormGroup;
  private loginError: string = null;

  /**
   * Used to validate the form once is filled correctly
   */
  public loginWithFirebase(): void {
    const data = this.login.value;
    const credential = {
      email: data.email,
      password: data.password
    }
    this.auth.signInWithEmail(credential).then(
      () => this.navCtrl.setRoot(HomePage),
      error => this.loginError = error.message
    )
  }

  /**
   * Sign in with google firebase authentication
   */
  public loginWithGoogle() {
    this.auth.signInWithGoogle().then(
      () => this.navCtrl.setRoot(HomePage),
      error => this.loginError = error.message
    )
  }

  /**
   * Signup with firebase authentication
   */
  public signup() {
    this.navCtrl.push(SignupPage);
  }

  /**
   * @constructor
   * @param navCtrl The controller used for the navigation app
   * @param navParams The parameters of the navigation
   * @param builder The form builder used to build
  */
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private builder: FormBuilder,
              private auth: AuthService) {
    this.login = this.builder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    })
  }

  /**
   * Called when the view is loaded
   */
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
