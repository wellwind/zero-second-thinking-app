import { ListComponent } from './list/list.component';
import { NewPaperComponent } from './new-paper/new-paper.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PapersComponent } from './papers.component';

@NgModule({
    imports: [
        RouterModule.forChild([{
            path: '',
            component: PapersComponent,
            children: [
                { path: '' },
                {
                    path: 'new',
                    component: NewPaperComponent
                },
                {
                    path: 'list',
                    component: ListComponent
                }
            ]
        }])
    ],
    exports: [
        RouterModule
    ]
})
export class PapersRoutingModule { }