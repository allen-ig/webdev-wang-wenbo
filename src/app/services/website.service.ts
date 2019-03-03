import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebsiteService {
  // private _websites = [
  //   {_id: '1', name: 'Facebook', developerId: '456', description: 'Lorem'},
  //   {_id: '2', name: 'Twitter', developerId: '456', description: 'Lorem'},
  //   {_id: '3', name: 'Gizmodo', developerId: '456', description: 'Lorem'},
  //   {_id: '4', name: 'Go', developerId: '123', description: 'Lorem'},
  //   {_id: '5', name: 'Tic Tac Toe', developerId: '123', description: 'Lorem'},
  //   {_id: '6', name: 'Checkers', developerId: '123', description: 'Lorem'},
  //   {_id: '7', name: 'Chess', developerId: '234', description: 'The chess app'},
  //   {_id: '8', name: 'Soccer', developerId: '234', description: 'We love soccer'},
  //   {_id: '9', name: 'Tennis', developerId: '234', description: 'Mario Tennis!'},
  //   {_id: '10', name: 'Google', developerId: '345', description: 'Google'},
  //   {_id: '11', name: 'Nike', developerId: '345', description: 'Nike'},
  //   {_id: '12', name: 'Hello Kitty', developerId: '345', description: 'Hello Kitty'}
  // ];

  // the URLs to call the http services API
  private _createWebsiteUrl = '/api/user/';
  private _findAllWebsitesForUserUrl = '/api/user/';
  private _findWebsiteByIdUrl = '/api/website/';
  private _updateWebsiteUrl = '/api/website/';
  private _deleteWebsiteUrl = '/api/website/';

  constructor(private _http: HttpClient) {
  }

  // adds the website parameter instance to the local websites array.
  createWebsite(userId: string, website: any) {
    const new_website = {
      _id: '',
      name: website.name,
      developerId: userId,
      description: website.description
    };
    new_website._id = new Date().getTime() + '';
    return this._http.post<any>(this._createWebsiteUrl + userId + '/website', new_website);
  }

  // retrieves the websites in local websites array whose developerId matches the parameter userId
  findWebsitesByUser(userId: string) {
    return this._http.get<any>(this._findAllWebsitesForUserUrl + userId + '/website');
  }

  // retrieves teh website in local websites array whose _id matches the websiteId parameter
  findWebsiteById(websiteId: string) {
    return this._http.get<any>(this._findWebsiteByIdUrl + websiteId);
  }

  // updates the website in local websites array whose _id matches the websiteId parameter
  updateWebsite(websiteId: string, website: any) {
    return this._http.put<any>(this._updateWebsiteUrl + websiteId, website);
  }

  // removes the website from local websites array whose _id matches the websiteId parameter
  deleteWebsite(websiteId: string) {
    return this._http.delete<any>(this._deleteWebsiteUrl + websiteId);
  }
}
