import {AfterViewInit, Directive, ElementRef, EventEmitter, Output} from '@angular/core';

declare var jQuery: any;

@Directive({
  selector: '[appSortable]'
})
export class SortableDirective implements AfterViewInit {
  @Output() newIndexEvent = new EventEmitter();
  private _initialIndex: any;

  constructor(private _elementRef: ElementRef) {
  }

  ngAfterViewInit(): void {
    this.appSortable(this);
  }

  appSortable(self) {
    jQuery(this._elementRef.nativeElement).sortable({
      axis: 'y',
      start: function (event, ui) {
        console.log('Old position: ' + ui.item.index());
        self._initialIndex = ui.item.index();
      },
      stop: function (event, ui) {
        console.log('New position: ' + ui.item.index());
        self.newIndexEvent.emit({
          startIndex: self._initialIndex,
          endIndex: ui.item.index()
        });
      }
    });
  }
}
