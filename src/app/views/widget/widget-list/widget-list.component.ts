import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WidgetService} from '../../../services/widget.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
  // properties
  private _userId: string;
  private _websiteId: string;
  private _pageId: string;
  private _widgets = [];

  constructor(private _activatedRoute: ActivatedRoute,
              private _widgetService: WidgetService,
              private _sanitizer: DomSanitizer) {
  }

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
    // then get the widgets associated with the pageId
    this._widgets = this._widgetService.findWidgetsByPageId(this._pageId);
    console.log(this._widgets);
  }

  // to make the video resource url trusted
  updateVideoUrl(url: string) {
    return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
