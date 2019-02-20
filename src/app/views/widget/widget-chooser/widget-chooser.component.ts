import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {
  // properties
  private _userId: string;
  private _websiteId: string;
  private _pageId: string;

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // update the properties using the route parameters
    this._activatedRoute.params.subscribe(
      params => {
        console.log(params);
        this._userId = params.uid;
        this._websiteId = params.wid;
        this._pageId = params.pid;
      }
    );
  }

}
