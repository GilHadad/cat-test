import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class GlobService {

  private glob = new BehaviorSubject<string>('waiting for clicks....');
  lastGlob = this.glob.asObservable();

  constructor() { }

  updateGlobal(update: string) {
    this.glob.next(update);
  }

}
