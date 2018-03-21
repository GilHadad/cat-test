import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

export interface Note {
  createdAt: Date;
  content: String;
}

@Injectable()
export class GlobService {



  private noteList: Note[] = [];
  obNoteList: BehaviorSubject<Note[]> = new BehaviorSubject([]);

  private selectedNote: Note;
  obSelectedNote: BehaviorSubject<Note> = new BehaviorSubject<Note>(null);

  constructor() { }

  get getSelectedNote(): Observable<Note> {
    return this.obSelectedNote.asObservable();
  }

  get noteListRes(): Observable<Note[]> {
    return this.obNoteList.asObservable();
  }

  setSelectedNote(note: Note) {
    this.obSelectedNote.next(note);
  }

  addNote(note: Note) {
    note.createdAt = new Date();
    this.noteList.push(note);
    this.obNoteList.next(this.noteList);
  }

  deleteNote(index: number) {
    this.noteList.splice(index, 1);
    this.obNoteList.next(this.noteList);
  }

  updateNoteContent(note: Note, content: String) {
    note.content = content;
    this.setSelectedNote(note);

  }


}

