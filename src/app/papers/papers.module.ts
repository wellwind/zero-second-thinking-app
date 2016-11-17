import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PapersComponent } from './papers.component';
import { PapersRoutingModule } from './papers.routing.module';

@NgModule({
  imports: [
    CommonModule,
    PapersRoutingModule
    PapersRoutingModule,
    SharedModule
  ],
  declarations: [PapersComponent]
})
export class PapersModule { }
