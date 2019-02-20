import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {
  // properties
  private _userId: string;
  private _websiteId: string;
  private _pageId: string;
  private _widgetId: string;
  private _widget: any;

  constructor(private _activatedRoute: ActivatedRoute,
              private _widgetService: WidgetService) {
  }

  ngOnInit() {
    // update the properties using the route parameters
    this._activatedRoute.params.subscribe(
      params => {
        console.log(params);
        this._userId = params.uid;
        this._websiteId = params.wid;
        this._pageId = params.pid;
        this._widgetId = params.wgid;
      }
    );
    // then get the widget by using the widget service
    this._widget = this._widgetService.findWidgetById(this._widgetId);
    console.log(this._widget);
  }

}
