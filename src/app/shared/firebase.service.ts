import { AngularFire, FirebaseAuthState } from 'angularfire2';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/Rx';

@Injectable()
export class FirebaseService implements CanActivate {

  constructor(public angularFire: AngularFire, public router: Router) {
  }

  getAuthResult() {
    return this.angularFire.auth;
  }

  login() {
    this.angularFire.auth.login();
  }

  logout() {
    this.angularFire.auth.logout();
    this.router.navigate(['/']);
  }

  canActivate() {
    return this.angularFire.auth
      .take(1)
      .map((authState: FirebaseAuthState) => !!authState)
      .do(authenticated => {
        if (!authenticated) {
          this.login();
        }
        return false;
      });
  }

}
