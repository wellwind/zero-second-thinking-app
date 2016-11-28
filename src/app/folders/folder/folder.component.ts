import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css']
})
export class FolderComponent implements OnInit {

  @Input() folderData: any;

  constructor() { }

  ngOnInit() {

  }

  getFolderName() {
    return this.folderData.name;
  }

  getFolderPostCount() {
    return this.folderData.posts === undefined ? 0 : this.folderData.posts.length;
  }

  loadFolderPapers() {
    console.log(this.folderData.$key);
    return false;
  }

}
