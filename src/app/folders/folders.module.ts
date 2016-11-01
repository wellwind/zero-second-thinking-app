import { FoldersRoutingModule } from './folders.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoldersComponent } from './folders.component';

@NgModule({
  imports: [
    CommonModule,
    FoldersRoutingModule
  ],
  declarations: [FoldersComponent]
})
export class FoldersModule { }
