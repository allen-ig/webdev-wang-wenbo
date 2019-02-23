import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {
  // properties input from WidgetEditComponent
  @Input() _userId: string;
  @Input() _websiteId: string;
  @Input() _pageId: string;
  @Input() _widgetId: string;
  @Input() _widget: any;

  // to pass back the update event to parent component
  @Output() _updateHeaderEvent = new EventEmitter();
  // to pass back the delete event to parent component
  @Output() _deleteHeaderEvent = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  updateHeader() {
    this._updateHeaderEvent.emit(this._widget);
  }

  deleteHeader() {
    this._deleteHeaderEvent.emit(this._widget);
  }

}
