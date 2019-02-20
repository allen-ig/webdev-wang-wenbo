import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';

@Directive({
  selector: '[appConfirmEqualValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ConfirmEqualValidator,
    multi: true
  }]
})
export class ConfirmEqualValidator implements Validator {
  @Input('appConfirmEqualValidator') compareTo: string;

  constructor() {
  }

  validate(control: AbstractControl): { [key: string]: any } | null {
    // now use the input value to find the control to compare to
    const controlToCompare = control.parent.get(this.compareTo);
    // then the main logic to return either the object, if fails, or null, if passes
    if (controlToCompare && controlToCompare.value !== control.value) {
      return {'notEqual': true};
    }
    return null;
  }
}
