import { PaperContent } from './interfaces/paper-content';
import { AngularFire, FirebaseAuthState } from 'angularfire2';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/Rx';

@Injectable()
export class FirebaseService implements CanActivate {

  authUser: FirebaseAuthState;

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
      .map((authState: FirebaseAuthState) => {
        this.authUser = authState;
        console.log(this.authUser);
        return !!authState;
      })
      .do(authenticated => {
        if (!authenticated) {
          this.login();
        }
        return false;
      });
  }

  createNewPaper(content: PaperContent): firebase.database.ThenableReference {
    let userPapers = this.angularFire.database.list('/user/' + this.authUser.uid + '/papers');
    return userPapers.push(content);
  }
}
