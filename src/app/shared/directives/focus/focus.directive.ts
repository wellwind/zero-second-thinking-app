import { Directive, ElementRef, Renderer, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective implements OnInit {

  @Input() appFocus: boolean;

  constructor(private elementRef: ElementRef, private renderer: Renderer) { }

  ngOnInit() {
    if (this.appFocus) {
      this.renderer.invokeElementMethod(this.elementRef.nativeElement, 'focus');
    }
  }
}
