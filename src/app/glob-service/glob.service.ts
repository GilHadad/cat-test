import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

export interface Note {
  createdAt: Date;
  content: string;
}

@Injectable()
export class GlobService {

  private glob = new BehaviorSubject<string>('waiting for clicks....');
  lastGlob = this.glob.asObservable();

  private noteList: Note[] = [];
  obNoteList: BehaviorSubject<Note[]> = new BehaviorSubject([]);


  constructor() { }

  updateGlobal(update: string) {
    this.glob.next(update);
  }

  getNoteList(): Observable<Note[]> {
    return this.obNoteList.asObservable();
  }

  addNote(note: Note) {

    note.createdAt = new Date();
    console.log(note);
    this.noteList.push(note);
    this.obNoteList.next(this.noteList);
  }

}

