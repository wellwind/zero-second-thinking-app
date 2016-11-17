import { FocusDirective } from './directives/focus/focus.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    FocusDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FocusDirective
  ]
})
export class SharedModule { }
