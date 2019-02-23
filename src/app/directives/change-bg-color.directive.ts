import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appChangeBgColor]'
})
export class ChangeBgColorDirective {
  @Input('appChangeBgColor') bgColor: string;

  constructor(private _elementRef: ElementRef) {
  }

  @HostListener('click') onClick() {
    this.changeBgColor(this.bgColor);
  }

  // the function for this directive, pass in the color
  changeBgColor(color: string) {
    this._elementRef.nativeElement.style.background = color;
  }

}
