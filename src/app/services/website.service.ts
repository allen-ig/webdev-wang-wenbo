import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebsiteService {
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
      name: website.name,
      developerId: userId,
      description: website.description
    };
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
