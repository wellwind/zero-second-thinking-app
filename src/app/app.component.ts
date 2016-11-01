import { AngularFire, FirebaseAuthState } from 'angularfire2';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  authUser: FirebaseAuthState;

  constructor(public angularFire: AngularFire) {
  }

  ngOnInit() {
    this.angularFire.auth.subscribe(authUser => {
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