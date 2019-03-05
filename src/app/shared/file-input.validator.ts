import {Directive, ElementRef, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';

@Directive({
  selector: '[appFileInputValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: FileInputValidator,
    multi: true
  }]
})
export class FileInputValidator implements Validator {
  @Input() maxSize: number;
  @Input() allowedType: RegExp;

  constructor(private _elementRef: ElementRef) {
  }

  validate(control: AbstractControl): { [key: string]: any } | null {
    // check if has file input
    const files = this._elementRef.nativeElement.files;
    if (files.length === 0) {
      return {'noFile': true};
    }
    // then check the file type
    const fileType = files[0].type.toLowerCase();
    const typeValid = this.allowedType.test(fileType);
    if (!typeValid) {
      return {'invalidType': true};
    }
    // then check file size
    const fileSize = files[0].size;
    if (fileSize > this.maxSize) {
      return {'invalidSize': true};
    }
  }

}
