import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  // the http calls URLs
  private _createPageUrl = '/api/website/';
  private _findAllPagesForWebsiteUrl = '/api/website/';
  private _findPageByIdUrl = '/api/page/';
  private _updatePageUrl = '/api/page/';
  private _deletePageUrl = '/api/page/';

  constructor(private _http: HttpClient) {
  }

  // adds the page parameter instance to the local page array. The new page's websiteId is set to the websiteId parameter
  createPage(websiteId: string, page: any) {
    const new_page = {
      name: page.name,
      websiteId: websiteId,
      title: page.title
    };
    return this._http.post<any>(
      this._createPageUrl + websiteId + '/page',
      new_page
    );
  }

  // retrieves the page in local page array whose websiteId matches the parameter websiteId
  findPagesByWebsiteId(websiteId: string) {
    return this._http.get<any>(
      this._findAllPagesForWebsiteUrl + websiteId + '/page'
    );
  }

  // retrieves the page in local page array whose _id matches the pageId parameter
  findPageById(pageId: string) {
    return this._http.get<any>(this._findPageByIdUrl + pageId);
  }

  // updates the page in local page array whose _id matches the pageId parameter
  updatePage(pageId: string, page: any) {
    return this._http.put<any>(this._updatePageUrl + pageId, page);
  }

  // removes the page from local page array whose _id matches the pageId parameter
  deletePage(pageId: string) {
    return this._http.delete<any>(this._deletePageUrl + pageId);
  }
}
