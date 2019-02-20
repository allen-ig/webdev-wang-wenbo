import {Component, OnInit} from '@angular/core';

@Component({
  // there are 3 ways to make the selector,
  // 1. use the auto generated one html tag, like app-xxx
  // 2. make it a class, like .app-xxx, so in html file, use it in class="..."
  // 3. in brackets, like [app-xxx], so in html file, use it like <div app-xxx>...</div>
  selector: 'app-header',
  // selector: '.app-header',
  // selector: '[app-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
