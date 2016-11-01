import { FirebaseService } from './shared/firebase.service';
import { FirebaseAuthState } from 'angularfire2';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  authUser: FirebaseAuthState;

  constructor(public firebase: FirebaseService) {
  }

  ngOnInit() {
    this.firebase.getAuthResult().subscribe(authUser => {
      this.authUser = authUser;
    });
  }

  login() {
    this.firebase.login();
  }

  logout() {
    this.firebase.logout();
  }
}