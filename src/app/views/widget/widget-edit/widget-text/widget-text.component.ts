import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-widget-text',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./widget-text.component.css']
})
export class WidgetTextComponent implements OnInit {
  // properties input from WidgetEditComponent
  @Input() _userId: string;
  @Input() _websiteId: string;
  @Input() _pageId: string;
  @Input() _widgetId: string;
  @Input() _widget: any;

  // to pass back the update event to parent component
  @Output() _updateTextEvent = new EventEmitter();
  // to pass back the delete event to parent component
  @Output() _deleteTextEvent = new EventEmitter();

  private _minTextRows = 1;
  private _maxTextRows = 20;

  constructor() {
  }

  ngOnInit() {
  }

  updateText() {
    this._updateTextEvent.emit(this._widget);
  }

  deleteText() {
    this._deleteTextEvent.emit(this._widget);
  }

}
