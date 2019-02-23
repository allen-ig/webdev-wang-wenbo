import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {
  // properties input from WidgetEditComponent
  @Input() _userId: string;
  @Input() _websiteId: string;
  @Input() _pageId: string;
  @Input() _widgetId: string;
  @Input() _widget: any;

  // to pass back the widget to parent component to update
  @Output() _updateImageEvent = new EventEmitter();
  // to pass back the widget to parent component to delete
  @Output() _deleteImageEvent = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  updateImage() {
    this._updateImageEvent.emit(this._widget);
  }

  deleteImage() {
    this._deleteImageEvent.emit(this._widget);
  }

}
