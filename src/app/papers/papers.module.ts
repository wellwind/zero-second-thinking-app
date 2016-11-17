import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PapersComponent } from './papers.component';
import { PapersRoutingModule } from './papers.routing.module';
import { NewPaperComponent } from './new-paper/new-paper.component';

@NgModule({
  imports: [
    CommonModule,
    PapersRoutingModule,
    SharedModule
  ],
  declarations: [PapersComponent, NewPaperComponent]
})
export class PapersModule { }
