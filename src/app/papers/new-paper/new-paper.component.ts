import { PaperContent } from './../../shared/interfaces/paper-content';
import { Component, OnInit, Renderer, ElementRef } from '@angular/core';

@Component({
  selector: 'app-new-paper',
  templateUrl: './new-paper.component.html',
  styleUrls: ['./new-paper.component.css']
})
export class NewPaperComponent implements OnInit {

  content: PaperContent;

  constructor(private renderer: Renderer, private elementRef: ElementRef) { }

  ngOnInit() {
    this.content = {
      title: '',
      lines: []
    };
  }

  newLine() {
    this.content.lines.push('');
  }
}
