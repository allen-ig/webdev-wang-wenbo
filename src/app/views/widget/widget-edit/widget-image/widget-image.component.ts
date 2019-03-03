import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-widget-image",
  templateUrl: "./widget-image.component.html",
  styleUrls: ["./widget-image.component.css"]
})
export class WidgetImageComponent implements OnInit {
  // gain access to form values
  @ViewChild("editImageForm") private _form: NgForm;

  // the preset min and max of image width
  private _minWidthPercentage = 1;
  private _maxWidthPercentage = 100;

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

  constructor() {}

  ngOnInit() {}

  updateImage() {
    this._updateImageEvent.emit(this._widget);
  }

  deleteImage() {
    this._deleteImageEvent.emit(this._widget);
  }
}
