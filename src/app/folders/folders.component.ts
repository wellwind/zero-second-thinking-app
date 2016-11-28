import { FirebaseService } from './../shared/firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent implements OnInit {
  folderName: string;
  folders: any;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.reloadFolders();
  }

  reloadFolders() {
    this.firebaseService.queryCategories().then(result => {
      this.folders = result;
      this.folderName = '';
    });
  }

  onFolderCreated() {
    this.reloadFolders();
  }

}
