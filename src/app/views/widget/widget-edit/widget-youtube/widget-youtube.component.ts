import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {
  // properties input from WidgetEditComponent
  @Input() _userId: string;
  @Input() _websiteId: string;
  @Input() _pageId: string;
  @Input() _widgetId: string;
  @Input() _widget: any;

  // to pass back the widget to parent component to update
  @Output() _updateYoutubeEvent = new EventEmitter();
  // to pass back the widget to parent component to delete
  @Output() _deleteYoutubeEvent = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  updateYoutube() {
    this._updateYoutubeEvent.emit(this._widget);
  }

  deleteYoutube() {
    this._deleteYoutubeEvent.emit(this._widget);
  }

}
