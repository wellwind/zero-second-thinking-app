import { AngularFire, FirebaseAuthState } from 'angularfire2';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  authUser: FirebaseAuthState;

  constructor(public angularFire: AngularFire) {
    angularFire.auth.subscribe(authUser => {
      this.authUser = authUser;
    });
  }

  login() {
    this.angularFire.auth.login();
  }

  logout() {
    this.angularFire.auth.logout();
  }
}