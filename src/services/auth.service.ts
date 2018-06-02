import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;

@Injectable()

/**
 * @class AuthService
 * Class used to authenticate user thanks to the Firebase authentication driver
 */
export class AuthService {
	private user: firebase.User = null;

    /**
     * @constructor
     * @param afAuth The AngularFireAuth object injected
     */
	constructor(public afAuth: AngularFireAuth) {
		afAuth.authState.subscribe(user => {
			this.user = user;
		});
	}

    /**
     * Sign in with email and password with firebase
     * @param credentials The credential used to sign in
     * @returns a promise with firebase SDK response
     */
	public signInWithEmail(credentials): Promise<any> {
		return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
			 credentials.password);
    }
    
    /**
     * Sign up with email and password
     * @param credentials The credential using the email and password
     * @returns a promise with firebase SDK response
     */
    public signUpWithEmailAndPassword(credentials): Promise<any> {
        return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
    }

    /**
     * @return the email of the current connected user, Not connected otherwise
     */
    public getEmail(): string {
        return this.user ? this.user.email : 'Not connected';
    }

    /**
     * @return if the user is authenticated or not
     */
    get authenticated(): boolean {
        return this.user !== null;
    }

    /**
     * Sign out from firebase authentication
     */
    public signOut(): void {
        this.afAuth.auth.signOut();
    }

    /**
     * Sign in using google auth provider
     */
    public signInWithGoogle(): Promise<any> {
		return this.oauthSignIn(new firebase.auth.GoogleAuthProvider());
    }

    /**
     * Sign in with oauth by using a specific provider
     * @param provider The authentication provider to sign in with oauth
     */
    private oauthSignIn(provider: AuthProvider): Promise<any> {
        if (!(<any>window).cordova) {
            return this.afAuth.auth.signInWithPopup(provider);
        } else {
            return this.afAuth.auth.signInWithRedirect(provider)
            .then(() => {
                return this.afAuth.auth.getRedirectResult().then( result => {
                    // This gives you a Google Access Token.
                    // You can use it to access the Google API.
                    let token = result.credential.accessToken;
                    // The signed-in user info.
                    let user = result.user;
                    console.log(token, user);
                }).catch(function(error) {
                    // Handle Errors here.
                    alert(error.message);
                });
            });
        }
    }
}