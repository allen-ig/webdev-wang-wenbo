import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../services/widget.service';

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

  constructor(private _activatedRoute: ActivatedRoute,
              private _widgetService: WidgetService,
              private _router: Router) {
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
  }

  onCreateNewWidget(widgetType: string) {
    const newWidgetId = Math.random() + '';
    let newWidget: any;
    switch (widgetType) {
      case 'HEADER': {
        newWidget = {
          _id: newWidgetId,
          widgetType: widgetType,
          pageId: this._pageId,
          size: '',
          text: ''
        };
        break;
      }
      case 'YOUTUBE': {
        newWidget = {
          _id: newWidgetId,
          widgetType: widgetType,
          pageId: this._pageId,
          width: '',
          url: ''
        };
        break;
      }
      case 'IMAGE': {
        newWidget = {
          _id: newWidgetId,
          widgetType: widgetType,
          pageId: this._pageId,
          width: '',
          url: ''
        };
        break;
      }
    }
    this._widgetService.createWidget(this._pageId, newWidget);
    this._router.navigate(['/user', this._userId, 'website', this._websiteId, 'page', this._pageId, 'widget', newWidgetId]);
  }

}
