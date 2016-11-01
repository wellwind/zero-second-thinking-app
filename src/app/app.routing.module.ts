import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';

@NgModule({
    imports: [
        RouterModule.forRoot([{
            path: '',
            component: IndexComponent
        }, {
            path: 'papers',
            loadChildren: 'app/papers/papers.module#PapersModule'
        }, {
            path: 'folders',
            loadChildren: 'app/folders/folders.module#FoldersModule'
        }, {
            path: 'tags',
            loadChildren: 'app/tags/tags.module#TagsModule'
        }])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}