import { Directive, ElementRef, Renderer, Input, OnInit, OnChanges } from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective implements OnInit, OnChanges {

  @Input() appFocus: boolean;

  constructor(private elementRef: ElementRef, private renderer: Renderer) { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.appFocus) {
      this.renderer.invokeElementMethod(this.elementRef.nativeElement, 'focus');
    }
  }
}
