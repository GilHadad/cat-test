import { Component, OnInit } from '@angular/core';
import { GlobService, Note } from '../glob-service/glob.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.css']
})
export class UpdateNoteComponent implements OnInit {

  private selectedNote: Note;
  private newNoteContent: String;

  constructor(private global: GlobService) { }

  ngOnInit() {
    this.global.getSelectedNote.subscribe(note => {
      this.selectedNote = note;
      if (note) { this.newNoteContent = note.content; }

    });
  }

  hideComp() {
    this.selectedNote = null;
  }

}
