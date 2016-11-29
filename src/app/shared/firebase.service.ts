import { PaperContent } from './interfaces/paper-content';
import { AngularFire, FirebaseAuthState } from 'angularfire2';
import { Injectable, OnInit } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Promise, Thenable } from 'firebase';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/Rx';

@Injectable()
export class FirebaseService implements CanActivate, OnInit {

  authUser: FirebaseAuthState;

  constructor(public angularFire: AngularFire) {
  }

  ngOnInit() {

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

  queryCategories() {
    return this.angularFire.database.list('/user/' + this.authUser.uid + '/categories').take(1).toPromise();
  }

  createNewCategory(folderName) {
    return this.angularFire.database.list('/user/' + this.authUser.uid + '/categories').push({name: folderName, papers: []});
  }

  createNewPaper(content: PaperContent): Thenable<any> {
    // query papers
    let userPapers = this.angularFire.database.list('/user/' + this.authUser.uid + '/papers');

    // push paper
    let addPaper = userPapers.push(content);

    return addPaper
      .then(() => this.addPostToCategory(addPaper.key, content))
      .then(() => this.addPostToTags(addPaper.key, content.tags));
  }

  addPostToCategory(key: string, paper: PaperContent): Promise<any> {
    // query category
    let categoryFirebaseObj = this.angularFire.database.object('/user/' + this.authUser.uid + '/categories/' + paper.category);

    return categoryFirebaseObj.take(1).toPromise().then(categoryObject => {
      let pushedData = {
        key: key,
        title: paper.title,
        date: paper.date
      }

      if (categoryObject.papers !== undefined) {
        categoryObject.papers.push(pushedData);
      } else {
        categoryObject.papers = [pushedData];
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
