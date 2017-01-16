import { TagsRoutingModule } from './tags.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagsComponent } from './tags.component';
import { TagCloudDirective } from './tag-cloud/tag-cloud.directive';

@NgModule({
  imports: [
    CommonModule,
    TagsRoutingModule
  ],
  declarations: [TagsComponent, TagCloudDirective]
})
export class TagsModule { }
