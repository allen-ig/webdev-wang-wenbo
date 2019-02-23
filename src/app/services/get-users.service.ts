import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/User';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetUsersService {
  private _url = '/assets/data/users.json';

  constructor(private _http: HttpClient) {
  }

  // use this service to get the Observable of the data fetched from the users.json file stored locally
  getUsers(): Observable<User[]> {
    return this._http.get<User[]>(this._url);
  }
}
