import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { HomePage } from '../home/home';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})

/**
 * @class SignupPage
 * Signup page class used to control the page
 */
export class SignupPage {

  private signupForm: FormGroup;
  private signupError: string = null;

  /**
   * @constructor
   * @param navCtrl The controller used for the navigation
   * @param navParams The controller used to navigate through the application
   * @param formBuilder The builder used to create signup form
   * @param authService The service used to authenticate the user and make the signup
   */
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              private authService: AuthService) {
    this.signupForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    })
  }

  /**
   * Method used to valid the form group and call the auth service
   */
  public signup(): void {
      const credential = {
        email: this.signupForm.value.email,
        password: this.signupForm.value.password
      }

      this.authService.signUpWithEmailAndPassword(credential).then(
        () => this.navCtrl.setRoot(HomePage),
        error => this.signupError = error.message
      )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
