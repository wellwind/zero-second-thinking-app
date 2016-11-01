import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PapersComponent } from './papers.component';
import { PapersRoutingModule } from './papers.routing.module';

@NgModule({
  imports: [
    CommonModule,
    PapersRoutingModule
  ],
  declarations: [PapersComponent]
})
export class PapersModule { }
