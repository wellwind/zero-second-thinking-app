import { PaperContent } from './interfaces/paper-content';
import { AngularFire, FirebaseAuthState } from 'angularfire2';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Promise, Thenable } from 'firebase';
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

  createNewPaper(content: PaperContent): Thenable<any> {
    // query papers
    let userPapers = this.angularFire.database.list('/user/' + this.authUser.uid + '/papers');

    // push paper
    let addPaper = userPapers.push(content);

    return addPaper.then(() => {
      // add paper key to category
      return this.addPostToCategory(addPaper.key, content.category);
    });
  }

  addPostToCategory(key: string, category: string): Promise<any> {
    // query category
    let categoryFirebaseObj = this.angularFire.database.object('/user/' + this.authUser.uid + '/categories/' + category);

    return categoryFirebaseObj.take(1).toPromise().then(categoryObject => {

      if (categoryObject.name === undefined) {
        categoryObject.name = category;
      }
      if (categoryObject.papers !== undefined) {
        categoryObject.papers.push(key);
      } else {
        categoryObject.papers = [key];
      }

      return categoryFirebaseObj.update({ name: categoryObject.name, papers: categoryObject.papers });
    });
  }
}
