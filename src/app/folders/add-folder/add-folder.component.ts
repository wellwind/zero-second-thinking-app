import { FirebaseService } from './../../shared/firebase.service';
import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-folder',
  templateUrl: './add-folder.component.html',
  styleUrls: ['./add-folder.component.css', '../folder/folder.component.css']
})
export class AddFolderComponent implements OnInit {

  @Output() folderCreated = new EventEmitter();

  folderName: string;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
  }

  addFolder() {
    this.firebaseService.createNewCategory(this.folderName).then(() => {
      this.folderCreated.emit();
    });
  }
}
