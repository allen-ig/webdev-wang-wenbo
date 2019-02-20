import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  private _pages = [
    {_id: '321', name: 'Home Page', websiteId: '456', title: 'Home'},
    {_id: '432', name: 'Index Page', websiteId: '456', title: 'Index'},
    {_id: '543', name: 'About Page', websiteId: '456', title: 'Page'},
  ];

  constructor() {
  }

  // adds the page parameter instance to the local page array. The new page's websiteId is set to the websiteId parameter
  createPage(websiteId: string, page: any) {
    const new_page = {
      _id: page._id,
      name: page.name,
      websiteId: page.websiteId,
      title: page.title
    };
    new_page.websiteId = websiteId;
    new_page._id = new Date().getTime() + '';
    this._pages.push(new_page);
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
        this._pages[i].websiteId = page.websiteId;
        this._pages[i].title = page.title;
      }
    }
  }

  // removes the page from local page array whose _id matches the pageId parameter
  deletePage(pageId: string) {
    for (const i in this._pages) {
      if (this._pages[i]._id === pageId) {
        const j = +i;
        this._pages.splice(j, 1);
      }
    }
  }
}
