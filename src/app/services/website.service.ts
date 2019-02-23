import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebsiteService {
  private _websites = [
    {_id: '1', name: 'Facebook', developerId: '456', description: 'Lorem'},
    {_id: '2', name: 'Twitter', developerId: '456', description: 'Lorem'},
    {_id: '3', name: 'Gizmodo', developerId: '456', description: 'Lorem'},
    {_id: '4', name: 'Go', developerId: '123', description: 'Lorem'},
    {_id: '5', name: 'Tic Tac Toe', developerId: '123', description: 'Lorem'},
    {_id: '6', name: 'Checkers', developerId: '123', description: 'Lorem'},
    {_id: '7', name: 'Chess', developerId: '234', description: 'The chess app'},
    {_id: '8', name: 'Soccer', developerId: '234', description: 'We love soccer'},
    {_id: '9', name: 'Tennis', developerId: '234', description: 'Mario Tennis!'},
    {_id: '10', name: 'Google', developerId: '345', description: 'Google'},
    {_id: '11', name: 'Nike', developerId: '345', description: 'Nike'},
    {_id: '12', name: 'Hello Kitty', developerId: '345', description: 'Hello Kitty'}
  ];

  constructor() {
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
    this._websites.push(new_website);
    console.log('Create a new website: ');
    console.log(new_website);
    return new_website;
  }

  // retrieves the websites in local websites array whose developerId matches the parameter userId
  findWebsitesByUser(userId: string) {
    return this._websites.filter(function (website) {
      return website.developerId === userId;
    });
  }

  // retrieves teh website in local websites array whose _id matches the websiteId parameter
  findWebsiteById(websiteId: string) {
    return this._websites.find(function (website) {
      return website._id === websiteId;
    });
  }

  // updates the website in local websites array whose _id matches the websiteId parameter
  updateWebsite(websiteId: string, website: any) {
    for (const i in this._websites) {
      if (this._websites[i]._id === websiteId) {
        this._websites[i].name = website.name;
        this._websites[i].description = website.description;
        console.log('Updated the website to: ');
        console.log(this._websites[i]);
      }
    }
  }

  // removes the website from local websites array whose _id matches the websiteId parameter
  deleteWebsite(websiteId: string) {
    for (const i in this._websites) {
      if (this._websites[i]._id === websiteId) {
        const j = +i;
        console.log('Deleted the following website: ');
        console.log(this._websites[i]);
        this._websites.splice(j, 1);
      }
    }
  }
}
