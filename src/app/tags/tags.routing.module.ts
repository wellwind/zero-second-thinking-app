import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TagsComponent } from './tags.component';

@NgModule({
    imports: [
      RouterModule.forChild([{
          path: '',
          component: TagsComponent
        }
      ])
    ],
    exports: [
        RouterModule
    ]
})
export class TagsRoutingModule {}