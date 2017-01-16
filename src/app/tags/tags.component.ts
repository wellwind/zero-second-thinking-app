import { Router, ActivatedRoute } from '@angular/router';
import { TagsModule } from './tags.module';
import { FirebaseService } from './../shared/firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tagWords: any;
  constructor(private firebaseService: FirebaseService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.firebaseService.queryTags().then((tags: any) => {
      this.tagWords = [];
      tags.forEach((tag) => {
        this.tagWords.push({
          name: tag.name,
          text: `${tag.name}(${tag.papers.length})`,
          weight: tag.papers.length
        });
      })
    });
  }

  tagClick(tagName){
    this.router.navigate(['/papers/list', { q: 'tag', name: tagName}])
  }

}
