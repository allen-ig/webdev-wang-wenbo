import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {
  // private _widgets = [
  //   {_id: '1', widgetType: 'HEADER', pageId: '13', size: '2', text: 'Hello meow~'},
  //   {_id: '2', widgetType: 'HEADER', pageId: '13', size: '4', text: 'I am a cutie meow~meow~'},
  //   {
  //     _id: '3',
  //     widgetType: 'IMAGE',
  //     pageId: '13',
  //     width: '100%',
  //     url: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.' +
  //       'jpeg?cs=srgb&dl=animal-animal-photography-cat-104827.jpg&fm=jpg'
  //   },
  //   {_id: '4', widgetType: 'HEADER', pageId: '13', size: '4', text: 'Here is a cute video for you~'},
  //   {_id: '5', widgetType: 'YOUTUBE', pageId: '13', width: '100%', url: 'https://www.youtube.com/embed/rNSnfXl1ZjU'},
  //   {_id: '6', widgetType: 'HEADER', pageId: '14', size: '2', text: 'Hello meow~'},
  //   {_id: '7', widgetType: 'HEADER', pageId: '15', size: '4', text: 'I am a cutie meow~meow~'},
  //   {
  //     _id: '8',
  //     widgetType: 'IMAGE',
  //     pageId: '10',
  //     width: '100%',
  //     url: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.' +
  //       'jpeg?cs=srgb&dl=animal-animal-photography-cat-104827.jpg&fm=jpg'
  //   },
  //   {_id: '9', widgetType: 'HEADER', pageId: '12', size: '4', text: 'Here is a cute video for you~'},
  //   {_id: '11', widgetType: 'YOUTUBE', pageId: '11', width: '100%', url: 'https://www.youtube.com/embed/rNSnfXl1ZjU'},
  //   {_id: '22', widgetType: 'HEADER', pageId: '9', size: '2', text: 'Hello meow~'},
  //   {_id: '33', widgetType: 'HEADER', pageId: '8', size: '4', text: 'I am a cutie meow~meow~'},
  //   {
  //     _id: '44',
  //     widgetType: 'IMAGE',
  //     pageId: '7',
  //     width: '100%',
  //     url: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.' +
  //       'jpeg?cs=srgb&dl=animal-animal-photography-cat-104827.jpg&fm=jpg'
  //   },
  //   {_id: '55', widgetType: 'HEADER', pageId: '6', size: '4', text: 'Here is a cute video for you~'},
  //   {_id: '66', widgetType: 'YOUTUBE', pageId: '5', width: '100%', url: 'https://www.youtube.com/embed/rNSnfXl1ZjU'},
  //   {_id: '77', widgetType: 'HEADER', pageId: '4', size: '2', text: 'Hello meow~'},
  //   {_id: '88', widgetType: 'HEADER', pageId: '3', size: '4', text: 'I am a cutie meow~meow~'},
  //   {
  //     _id: '99',
  //     widgetType: 'IMAGE',
  //     pageId: '2',
  //     width: '100%',
  //     url: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.' +
  //       'jpeg?cs=srgb&dl=animal-animal-photography-cat-104827.jpg&fm=jpg'
  //   },
  //   {_id: '111', widgetType: 'HEADER', pageId: '1', size: '4', text: 'Here is a cute video for you~'},
  //   {_id: '222', widgetType: 'YOUTUBE', pageId: '1', width: '100%', url: 'https://www.youtube.com/embed/rNSnfXl1ZjU'}
  // ];

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
