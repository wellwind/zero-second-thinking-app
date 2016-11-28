import { PaperContent } from './interfaces/paper-content';
import { AngularFire, FirebaseAuthState } from 'angularfire2';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Promise, Thenable } from 'firebase';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/Rx';

@Injectable()
export class FirebaseService implements CanActivate {

  authUser: FirebaseAuthState;

  constructor(public angularFire: AngularFire, public router: Router) {
  constructor(public angularFire: AngularFire) {
  }

  getAuthResult() {
    return this.angularFire.auth;
  }

  login() {
    this.angularFire.auth.login();
  }

  logout() {
    this.angularFire.auth.logout();
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

    return addPaper
      .then(() => this.addPostToCategory(addPaper.key, content.category))
      .then(() => this.addPostToTags(addPaper.key, content.tags));
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

  addPostToTags(key: string, tags: string[]) {
    let promiseArray: Promise<any>[] = [];

    // get all tasks
    tags
      .filter(tag => tag.trim() !== '')
      .forEach(tag => {
        let tagFirebaseObj = this.angularFire.database.object('/user/' + this.authUser.uid + '/tags/' + tag);
        let task = tagFirebaseObj.take(1).toPromise().then(tagObj => {

          if (tagObj.name === undefined) {
            tagObj.name = tag;
          }
          if (tagObj.papers !== undefined) {
            tagObj.papers.push(key);
          } else {
            tagObj.papers = [key];
          }

          return tagFirebaseObj.update({ name: tag, papers: tagObj.papers });
        });
        promiseArray.push(task);
      });

    // combine tasks to one promise
    let result: Promise<any> = promiseArray[0];
    for (let i = 1; i < promiseArray.length - 2; ++i) {
      result = result.then(() => promiseArray[i]);
    }

    return result;
  }
}
