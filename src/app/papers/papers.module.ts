import { FormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PapersComponent } from './papers.component';
import { PapersRoutingModule } from './papers.routing.module';
import { NewPaperComponent } from './new-paper/new-paper.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PapersRoutingModule,
    SharedModule
  ],
  declarations: [PapersComponent, NewPaperComponent, ListComponent, ViewComponent]
})
export class PapersModule { }
