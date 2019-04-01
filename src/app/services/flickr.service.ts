import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlickrService {

  private _key = '90ea0df0685933f65ea96fab852a3023';
  private _secret = '59b7fb7ceb0a467b';
  private _urlBase = `https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=${this._key}&text=`;

  constructor(private _http: HttpClient) {
  }

  searchPhotos(searchTerm: any) {
    const url = this._urlBase + searchTerm;
    console.log('Search url: ');
    console.log(url);
    return this._http.get(url, {responseType: 'text'});
  }
}
