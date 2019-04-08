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

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _widgetService: WidgetService,
    private _router: Router
  ) {
  }

  ngOnInit() {
    // update the properties using the route parameters
    this._activatedRoute.params.subscribe(params => {
      console.log(params);
      this._userId = params.uid;
      this._websiteId = params.wid;
      this._pageId = params.pid;
    });
  }

  onCreateNewWidget(widgetType: string) {
    let newWidget: any;
    switch (widgetType) {
      case 'HEADER': {
        newWidget = {
          widgetType: widgetType,
          pageId: this._pageId,
          name: 'Untitled',
          size: '1',
          text: 'Untitled Header'
        };
        break;
      }
      case 'YOUTUBE': {
        newWidget = {
          widgetType: widgetType,
          pageId: this._pageId,
          name: 'Untitled',
          width: '100%',
          url: ''
        };
        break;
      }
      case 'IMAGE': {
        newWidget = {
          widgetType: widgetType,
          pageId: this._pageId,
          name: 'Untitled',
          width: '100%',
          url: ''
        };
        break;
      }
      case 'HTML': {
        newWidget = {
          widgetType: widgetType,
          pageId: this._pageId,
          name: 'Untitled',
          text: 'Some HTML Text...'
        };
        break;
      }
      case 'TEXT': {
        newWidget = {
          widgetType: widgetType,
          pageId: this._pageId,
          name: 'Untitled',
          text: 'Some text input...',
          rows: 1,
          placeholder: 'Placeholder',
          formatted: false
        };
        break;
      }
    }

    // then call the api service to create the new widget
    this._widgetService
      .createWidget(this._pageId, newWidget)
      .subscribe(data => {
        console.log('Created a new widget: ');
        console.log(data);

        // then navigate to widget edit page
        this._router.navigate([
          '/user',
          this._userId,
          'website',
          this._websiteId,
          'page',
          this._pageId,
          'widget',
          data._id
        ]);
      });
  }
}
