import { Component, OnInit } from '@angular/core';
import { GlobService, Note } from '../glob-service/glob.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  noteList: Note[];

  constructor(private global: GlobService) { }

  ngOnInit() {
    this.global.obNoteList.subscribe(list => this.noteList = list);
  }

}
