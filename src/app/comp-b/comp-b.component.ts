import { Component, OnInit } from '@angular/core';
import { GlobService } from '../glob-service/glob.service';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css'],

})
export class CompBComponent implements OnInit {

  compInput: string;

  globMsg: string;

  constructor(private global: GlobService) { }

  ngOnInit() {
    this.global.lastGlob.subscribe(last => this.globMsg = last);
  }

  newUpdateToGlobal() {
    this.global.updateGlobal(this.compInput);
    // this.global.updateGlobal('new data!!!');
  }

}
