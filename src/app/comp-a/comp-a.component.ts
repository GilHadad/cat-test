import { Component, OnInit } from '@angular/core';
import { GlobService } from '../glob.service';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css'],
  providers: [GlobService]
})
export class CompAComponent implements OnInit {

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
