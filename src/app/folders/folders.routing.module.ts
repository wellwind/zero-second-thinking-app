import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FoldersComponent } from './folders.component';

@NgModule({
    imports: [
      RouterModule.forChild([{
          path: '',
          component: FoldersComponent
        }
      ])
    ],
    exports: [
        RouterModule
    ]
})
export class FoldersRoutingModule {}