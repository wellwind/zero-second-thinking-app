webpackJsonp([1,6],{1024:function(e,t,n){"use strict";var o=n(451),r=n(1032),a=n(1),i=n(85),f=n(1027),c=n(1031),l=n(1030);n.d(t,"FoldersModule",function(){return p});var d=this&&this.__decorate||function(e,t,n,o){var r,a=arguments.length,i=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var f=e.length-1;f>=0;f--)(r=e[f])&&(i=(a<3?r(i):a>3?r(t,n,i):r(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},s=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},p=function(){function e(){}return e=d([n.i(a.q)({imports:[i.b,o.a,r.a],declarations:[f.a,c.a,l.a]}),s("design:paramtypes",[])],e)}()},1027:function(e,t,n){"use strict";var o=n(195),r=n(1);n.d(t,"a",function(){return f});var a=this&&this.__decorate||function(e,t,n,o){var r,a=arguments.length,i=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var f=e.length-1;f>=0;f--)(r=e[f])&&(i=(a<3?r(i):a>3?r(t,n,i):r(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},f=function(){function e(e){this.firebaseService=e}return e.prototype.ngOnInit=function(){this.reloadFolders()},e.prototype.reloadFolders=function(){var e=this;this.firebaseService.queryCategories().then(function(t){e.folders=t,e.folderName=""})},e.prototype.onFolderCreated=function(){this.reloadFolders()},e=a([n.i(r.B)({selector:"app-folders",template:n(1040),styles:[n(1036)]}),i("design:paramtypes",["function"==typeof(t="undefined"!=typeof o.a&&o.a)&&t||Object])],e);var t}()},1029:function(e,t){e.exports=".quick-btn{\n  position:relative;\n  display:inline-block;\n  padding-top:16px;\n  margin:10px;\n  color:#444444;\n  text-align:center;\n  text-decoration:none;\n  text-shadow:0 1px 0 rgba(255, 255, 255, 0.6);\n  box-shadow:0 0 0 1px #F8F8F8 inset, 0 0 0 1px #CCCCCC;\n}\n\n.quick-btn .label{\n  position:absolute;\n  top:-5px;\n  right:-5px;\n}\n\n.folder-link{\n    text-decoration:none;\n}"},1030:function(e,t,n){"use strict";var o=n(195),r=n(1);n.d(t,"a",function(){return f});var a=this&&this.__decorate||function(e,t,n,o){var r,a=arguments.length,i=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var f=e.length-1;f>=0;f--)(r=e[f])&&(i=(a<3?r(i):a>3?r(t,n,i):r(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},f=function(){function e(e){this.firebaseService=e,this.folderCreated=new r.r}return e.prototype.ngOnInit=function(){},e.prototype.addFolder=function(){var e=this;this.firebaseService.createNewCategory(this.folderName).then(function(){e.folderCreated.emit()})},a([n.i(r.o)(),i("design:type",Object)],e.prototype,"folderCreated",void 0),e=a([n.i(r.B)({selector:"app-add-folder",template:n(1038),styles:[n(1035),n(1029)]}),i("design:paramtypes",["function"==typeof(t="undefined"!=typeof o.a&&o.a)&&t||Object])],e);var t}()},1031:function(e,t,n){"use strict";var o=n(1);n.d(t,"a",function(){return i});var r=this&&this.__decorate||function(e,t,n,o){var r,a=arguments.length,i=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var f=e.length-1;f>=0;f--)(r=e[f])&&(i=(a<3?r(i):a>3?r(t,n,i):r(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},a=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=function(){function e(){}return e.prototype.ngOnInit=function(){},e.prototype.getFolderKey=function(){return this.folderData.$key},e.prototype.getFolderName=function(){return this.folderData.name},e.prototype.getFolderPaperCount=function(){return void 0===this.folderData.papers?0:this.folderData.papers.length},e.prototype.loadFolderPapers=function(){return console.log(this.folderData.$key),!1},r([n.i(o.i)(),a("design:type",Object)],e.prototype,"folderData",void 0),e=r([n.i(o.B)({selector:"app-folder",template:n(1039),styles:[n(1029)]}),a("design:paramtypes",[])],e)}()},1032:function(e,t,n){"use strict";var o=n(1),r=n(283),a=n(1027);n.d(t,"a",function(){return c});var i=this&&this.__decorate||function(e,t,n,o){var r,a=arguments.length,i=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var f=e.length-1;f>=0;f--)(r=e[f])&&(i=(a<3?r(i):a>3?r(t,n,i):r(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},f=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(){function e(){}return e=i([n.i(o.q)({imports:[r.b.forChild([{path:"",component:a.a}])],exports:[r.b]}),f("design:paramtypes",[])],e)}()},1035:function(e,t){e.exports=""},1036:function(e,t){e.exports=""},1038:function(e,t){e.exports='<div>\n  <div class="quick-btn" href="#">\n    <div class="text-info"><i class="fa fa-fw fa-plus fa-5x"></i></div>\n  </div>\n</div>\n<div>\n  <input type="text"  [(ngModel)]="folderName" (keyup.enter)="addFolder()" class="form-control input-sm" placeholder="請輸入新資料夾名稱"> \n</div>\n'},1039:function(e,t){e.exports='<div>\n  <a class="quick-btn" [routerLink]="[\'/papers/list\', { q: \'folder\', key: getFolderKey(), name: getFolderName() }]" (click)="loadFolderPapers()">\n    <div class="text-info"><i class="fa fa-fw fa-folder-open fa-5x"></i></div>\n    <div>\n      <span class="label label-info">{{ getFolderPaperCount() }}</span>\n    </div>\n  </a>\n</div>\n<div>\n  <a class="folder-link" [routerLink]="[\'/papers/list\', { q: \'folder\', key: getFolderKey(), name: getFolderName() }]" (click)="loadFolderPapers()"><span>{{ getFolderName() }} </span></a>\n</div>\n'},1040:function(e,t){e.exports='<div class="row">\n  <div class="col-sm-4" *ngFor="let folder of folders">\n    <div class="text-center">\n      <app-folder [folderData]="folder"></app-folder>\n    </div>\n  </div>\n  <div class="col-sm-4">\n    <div class="text-center">\n      <app-add-folder (folderCreated)="onFolderCreated()"></app-add-folder>\n    </div>\n  </div>\n</div>\n'}});
//# sourceMappingURL=1.cbe2dc2dedf567743a5d.bundle.map