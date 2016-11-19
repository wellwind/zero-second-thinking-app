import { FirebaseService } from '../../shared/firebase.service';
import { PaperContent, PaperContentLine } from './../../shared/interfaces/paper-content';
import { Component, OnInit, Renderer, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Thenable } from 'firebase';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-new-paper',
  templateUrl: './new-paper.component.html',
  styleUrls: ['./new-paper.component.css']
})
export class NewPaperComponent implements OnInit {

  content: PaperContent;
  paperLines: PaperContentLine[];
  tagString: string;

  notificationOptions = {
    timeOut: 5000,
    lastOnBottom: true,
    clickToClose: true,
    maxLength: 0,
    maxStack: 7,
    showProgressBar: true,
    pauseOnHover: true,
    preventDuplicates: false,
    preventLastDuplicates: 'visible',
    rtl: false,
    animate: 'scale',
    position: ['right', 'bottom']
  };

  constructor(
    private renderer: Renderer,
    private elementRef: ElementRef,
    private changeDetectorRef: ChangeDetectorRef,
    private notificationService: NotificationsService,
    private firebaseService: FirebaseService) {
  }

  ngOnInit() {
    this.content = {
      title: '',
      lines: [],
      category: '',
      tags: []
    };
    this.paperLines = [];
    this.tagString = '';
  }

  newLine() {
    this.paperLines.push({ data: '' });
    this.changeDetectorRef.detectChanges();
  }

  save() {
    this.paperLines = this.paperLines.filter(val => val.data.trim() !== '');
    this.content.lines = this.paperLines.map(line => line.data);
    this.content.tags = (this.tagString.trim() !== '') ? this.tagString.split(',').map(val => val.trim()) : [];

    let createNewPaperResult = (this.firebaseService.createNewPaper(this.content) as Thenable<any>);
    createNewPaperResult.then(() => {
      this.notificationService.success('完成', '筆記已經新增！');
    }).catch(err => {
      this.notificationService.error('失敗', err.message);
      console.log(err);
    });
  }
}
