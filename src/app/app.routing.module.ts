import { FirebaseService } from './shared/firebase.service';
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
            loadChildren: 'app/papers/papers.module#PapersModule',
            canActivate: [FirebaseService]
        }, {
            path: 'folders',
            loadChildren: 'app/folders/folders.module#FoldersModule',
            canActivate: [FirebaseService]
        }, {
            path: 'tags',
            loadChildren: 'app/tags/tags.module#TagsModule',
            canActivate: [FirebaseService]
        }])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}