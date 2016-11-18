import { FocusDirective } from './directives/focus/focus.directive';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    FocusDirective
  ],
  imports: [
    CommonModule,
    SimpleNotificationsModule
  ],
  exports: [
    FocusDirective,
    SimpleNotificationsModule
  ]
})
export class SharedModule { }
