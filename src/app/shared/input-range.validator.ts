import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';
import {isNumeric} from 'rxjs/internal-compatibility';

@Directive({
  selector: '[appInputRangeValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: InputRangeValidator,
    multi: true
  }]
})
export class InputRangeValidator implements Validator {
  // marks the max and min value of the range
  @Input() min: number;
  @Input() max: number;

  constructor() {
  }

  validate(control: AbstractControl): { [key: string]: any } | null {
    const inputValue = control.value;
    if (isNumeric(inputValue) && inputValue >= this.min && inputValue <= this.max) {
      return null;
    } else {
      return {'notValid': true};
    }
  }

}
