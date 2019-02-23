import {Component} from '@angular/core';

// This is the decorator, which include the metadata for the component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webdev-wang-wenbo';
  // _bgColor = 'green';

  constructor() {
  }
}
