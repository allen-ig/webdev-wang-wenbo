import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {
  // the http calls URLs
  private _createWidgetUrl = '/api/page/';
  private _findAllWidgetsForPageUrl = '/api/page/';
  private _findWidgetByIdUrl = '/api/widget/';
  private _updateWidgetUrl = '/api/widget/';
  private _deleteWidgetUrl = '/api/widget/';
  private _updateWidgetOrderUrl = '/api/page/';

  constructor(private _http: HttpClient) {
  }

  // adds the widget parameter instance to the local widgets array. The new widget's pageId is set to the pageId parameter
  createWidget(pageId: string, widget: any) {
    return this._http.post<any>(
      this._createWidgetUrl + pageId + '/widget',
      widget
    );
  }

  // retrieves the widgets in local widgets array whose pageId matches the parameter pageId
  findWidgetsByPageId(pageId: string) {
    return this._http.get<any>(
      this._findAllWidgetsForPageUrl + pageId + '/widget'
    );
  }

  // retrieves the widget in local widgets array whose _id matches the widgetId parameter
  findWidgetById(widgetId: string) {
    return this._http.get<any>(this._findWidgetByIdUrl + widgetId);
  }

  // updates the widget in local widgets array whose _id matches the widgetId parameter
  updateWidget(widgetId: string, widget: any) {
    return this._http.put<any>(this._updateWidgetUrl + widgetId, widget);
  }

  // removes the widget from local widgets array whose _id matches the widgetId parameter
  deleteWidget(widgetId: string) {
    return this._http.delete<any>(this._deleteWidgetUrl + widgetId);
  }

  // update the order of the widget at page Id from start index to end index
  updateWidgetOrder(pageId: string, startIndex: number, endIndex: number) {
    return this._http.put<any>(this._updateWidgetOrderUrl + pageId + '/widget?initial=' + startIndex + '&final=' + endIndex, null);
  }
}
