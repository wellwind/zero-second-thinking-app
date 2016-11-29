import { FirebaseService } from './../../shared/firebase.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  queryType: string;
  queryKey: string;
  queryName: string;
  queryResult: any;

  constructor(private route: ActivatedRoute, private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.queryType = params['q'];
      this.queryKey = params['key'];
      this.queryName = params['name'];

      if (this.queryType === 'folder') {
        this.firebaseService.queryCategory(this.queryKey).then((result: any) => {
          result.papers.sort((a, b) => a.date < b.date);
          this.queryResult = result;
          console.log(this.queryResult);
        });
      }
    });
  }

  getQueryTypeName() {
    if (this.queryType === 'folder') {
      return '資料夾';
    } else if (this.queryType === 'tag') {
      return '標籤';
    } else {
      return '';
    }
  }

  goToPaper(key) {

  }
}
