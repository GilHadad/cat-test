import { Component } from '@angular/core';
import { GlobService } from './glob-service/glob.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GlobService]
})
export class AppComponent {
  title = 'app';
}
