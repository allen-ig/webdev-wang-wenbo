import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  private _pages = [
    {_id: '1', name: 'Home Page', websiteId: '3', title: 'Home'},
    {_id: '2', name: 'Index Page', websiteId: '3', title: 'Index'},
    {_id: '3', name: 'About Page', websiteId: '3', title: 'Page'},
    {_id: '4', name: 'Home Page', websiteId: '4', title: 'Home'},
    {_id: '5', name: 'Index Page', websiteId: '5', title: 'Index'},
    {_id: '6', name: 'About Page', websiteId: '6', title: 'Page'},
    {_id: '7', name: 'Home Page', websiteId: '7', title: 'Home'},
    {_id: '8', name: 'Index Page', websiteId: '8', title: 'Index'},
    {_id: '9', name: 'About Page', websiteId: '9', title: 'Page'},
    {_id: '10', name: 'Home Page', websiteId: '10', title: 'Home'},
    {_id: '11', name: 'Index Page', websiteId: '11', title: 'Index'},
    {_id: '12', name: 'About Page', websiteId: '12', title: 'Page'},
    {_id: '13', name: 'Home Page', websiteId: '1', title: 'Home'},
    {_id: '14', name: 'Index Page', websiteId: '1', title: 'Index'},
    {_id: '15', name: 'About Page', websiteId: '2', title: 'Page'}
  ];

  constructor() {
  }

  // adds the page parameter instance to the local page array. The new page's websiteId is set to the websiteId parameter
  createPage(websiteId: string, page: any) {
    const new_page = {
      _id: page._id,
      name: page.name,
      websiteId: websiteId,
      title: page.title
    };
    new_page._id = new Date().getTime() + '';
    this._pages.push(new_page);
    console.log('Created a new page: ');
    console.log(new_page);
    return new_page;
  }

  // retrieves the page in local page array whose websiteId matches the parameter websiteId
  findPagesByWebsiteId(websiteId: string) {
    return this._pages.filter(function (page) {
      return page.websiteId === websiteId;
    });
  }

  // retrieves the page in local page array whose _id matches the pageId parameter
  findPageById(pageId: string) {
    return this._pages.find(function (page) {
      return page._id === pageId;
    });
  }

  // updates the page in local page array whose _id matches the pageId parameter
  updatePage(pageId: string, page: any) {
    for (const i in this._pages) {
      if (this._pages[i]._id === pageId) {
        this._pages[i].name = page.name;
        this._pages[i].title = page.title;
        console.log('Updated the page to: ');
        console.log(this._pages[i]);
      }
    }
  }

  // removes the page from local page array whose _id matches the pageId parameter
  deletePage(pageId: string) {
    for (const i in this._pages) {
      if (this._pages[i]._id === pageId) {
        const j = +i;
        console.log('Deleted the following page: ');
        console.log(this._pages[i]);
        this._pages.splice(j, 1);
      }
    }
  }
}
