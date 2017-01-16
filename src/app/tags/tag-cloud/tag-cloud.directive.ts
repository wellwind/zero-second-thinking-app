import { TagsModule } from './../tags.module';
import { Directive, Input, ElementRef, Renderer, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
declare var $: any;

@Directive({
  selector: '[appTagCloud]'
})
export class TagCloudDirective implements OnChanges {

  @Input() tags: any;
  @Output() onTagClick = new EventEmitter();

  constructor(private elementRef: ElementRef, private renderer: Renderer) { }

  ngOnChanges() {
    if (this.tags) {
      var element = this.elementRef.nativeElement;

      this.tags.forEach((tag) => {
        tag.handlers = {
          click: ($event) => {
            this.onTagClick.emit(tag.name);
          }
        }
      });

      $(element).jQCloud(this.tags);
    }
  }
}
