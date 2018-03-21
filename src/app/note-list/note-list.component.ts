import { Component, OnInit, OnDestroy } from '@angular/core';
import { GlobService, Note } from '../glob-service/glob.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit, OnDestroy {
  noteList: Note[];
  private subscribe: any;

  constructor(private global: GlobService) { }

  ngOnInit() {
    this.subscribe = this.global.noteListRes.subscribe(list => this.noteList = list);
  }

  deleteNote(note: Note) {

  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

}
