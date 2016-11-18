import { FirebaseService } from '../../shared/firebase.service';
import { PaperContent } from './../../shared/interfaces/paper-content';
import { Component, OnInit, Renderer, ElementRef, ChangeDetectorRef } from '@angular/core';
import { database } from 'firebase';

@Component({
  selector: 'app-new-paper',
  templateUrl: './new-paper.component.html',
  styleUrls: ['./new-paper.component.css']
})
export class NewPaperComponent implements OnInit {

  content: PaperContent;
  tagString: string;

  constructor(
    private renderer: Renderer,
    private elementRef: ElementRef,
    private changeDetectorRef: ChangeDetectorRef,
    private firebaseService: FirebaseService) {
  }

  ngOnInit() {
    this.content = {
      title: '',
      lines: [],
      category: '',
      tags: []
    };
    this.tagString = '';
  }

  newLine() {
    this.content.lines.push('');
    this.changeDetectorRef.detectChanges();
  }

  save() {
    this.content.lines = this.content.lines.filter(val => val.trim() !== '');
    this.content.tags = (this.tagString.trim() !== '') ? this.tagString.split(',').map(val => val.trim()) : [];
    console.log(this.content);
    (this.firebaseService.createNewPaper(this.content) as database.ThenableReference)
      .then(() => {

      })
      .catch(err => {
        console.log(err);
      });
  }
}
