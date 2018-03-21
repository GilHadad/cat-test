import { Component, OnInit } from '@angular/core';
import { GlobService, Note } from '../glob-service/glob.service';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css']
})
export class NoteCreateComponent implements OnInit {

  private newNote: Note = {
    createdAt: null,
    content: null,
  };

  constructor(private global: GlobService) { }

  ngOnInit() {
  }

  addNote() {
    this.global.addNote(this.newNote);
    this.newNote = {
      createdAt: null,
      content: null,
    };
  }


}
