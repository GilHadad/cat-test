import { Component, OnInit, OnDestroy } from '@angular/core';
import { GlobService, Note } from '../glob-service/glob.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.css']
})
export class UpdateNoteComponent implements OnInit, OnDestroy {

  private selectedNote: Note;
  private newNoteContent: String;

  private subscribe: any;

  constructor(private global: GlobService) { }

  ngOnInit() {
    this.subscribe = this.global.getSelectedNote.subscribe(note => {
      this.selectedNote = note;
      if (note) { this.newNoteContent = note.content; }

    });
  }

  hideComp() {
    this.selectedNote = null;
  }


  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

}
