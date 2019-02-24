import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';

@Directive({
  selector: '[appPercentageRangeValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PercentageRangeValidator,
    multi: true
  }]
})
export class PercentageRangeValidator implements Validator {
  // marks the min and max percentage value
  @Input() min: number;
  @Input() max: number;
  // initialize a RegEx instance
  private _regex = new RegExp('^[-+]?[0-9]*\\.?[0-9]+%$');

  constructor() {
  }

  validate(control: AbstractControl): { [key: string]: any } | null {
    const testResult = this._regex.test(control.value);
    if (testResult) {
      const number = parseFloat(control.value);
      if (number >= this.min && number <= this.max) {
        return null;
      }
    }
    return {'notValid': true};
  }

}
