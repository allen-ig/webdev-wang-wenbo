import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-widget-html',
  templateUrl: './widget-html.component.html',
  styleUrls: ['./widget-html.component.css']
})
export class WidgetHtmlComponent implements OnInit {
  // properties input from WidgetEditComponent
  @Input() _userId: string;
  @Input() _websiteId: string;
  @Input() _pageId: string;
  @Input() _widgetId: string;
  @Input() _widget: any;

  // to pass back the update event to parent component
  @Output() _updateHtmlEvent = new EventEmitter();
  // to pass back the delete event to parent component
  @Output() _deleteHtmlEvent = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  updateHtml() {
    this._updateHtmlEvent.emit(this._widget);
  }

  deleteHtml() {
    this._deleteHtmlEvent.emit(this._widget);
  }

}
