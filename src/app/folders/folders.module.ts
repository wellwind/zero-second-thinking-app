import { FormsModule } from '@angular/forms';
import { FoldersRoutingModule } from './folders.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoldersComponent } from './folders.component';
import { FolderComponent } from './folder/folder.component';
import { AddFolderComponent } from './add-folder/add-folder.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FoldersRoutingModule
  ],
  declarations: [FoldersComponent, FolderComponent, AddFolderComponent]
})
export class FoldersModule { }
