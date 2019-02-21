import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'safeUrl'
})
export class SafeUrlPipe implements PipeTransform {
  // use this sanitizer to transform the video url to trusted url
  constructor(private _sanitizer: DomSanitizer) {
  }

  transform(url: any): any {
    return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
