import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../../shared/firebase.service';
import { PaperContent } from '../../shared/interfaces/paper-content';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  paperData: PaperContent;

  constructor(private route: ActivatedRoute, private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.route.params.take(1).toPromise().then(param => {
      return this.firebaseService.queryPaper(param['key']);
    }).then(paper => {
      console.log(paper);
      this.paperData = paper as PaperContent;
    });
  }

}
