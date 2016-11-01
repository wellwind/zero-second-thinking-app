import { AngularFire, FirebaseAuthState } from 'angularfire2';
import { Injectable } from '@angular/core';

@Injectable()
export class FirebaseService {

  constructor(public angularFire: AngularFire) {
  }

  getAuthResult(){
    return this.angularFire.auth;
  }

  login() {
    this.angularFire.auth.login();
  }

  logout() {
    this.angularFire.auth.logout();
  }
}
