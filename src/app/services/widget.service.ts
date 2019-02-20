import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {
  private _widgets = [
    {_id: '123', widgetType: 'HEADER', pageId: '321', size: '2', text: 'Hello meow~'},
    {_id: '234', widgetType: 'HEADER', pageId: '321', size: '4', text: 'I am a cutie meow~meow~'},
    {
      _id: '345',
      widgetType: 'IMAGE',
      pageId: '321',
      width: '100%',
      url: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.' +
        'jpeg?cs=srgb&dl=animal-animal-photography-cat-104827.jpg&fm=jpg'
    },
    {_id: '456', widgetType: 'HTML', pageId: '321', text: '<p>Lorem ipsum</p>'},
    {_id: '567', widgetType: 'HEADER', pageId: '321', size: '4', text: 'Here is a cute video for you~'},
    {_id: '678', widgetType: 'YOUTUBE', pageId: '321', width: '100%', url: 'https://www.youtube.com/embed/rNSnfXl1ZjU'},
    {_id: '789', widgetType: 'HTML', pageId: '321', text: '<p>Lorem ipsum</p>'},
  ];

  constructor() {
  }

  // adds the widget parameter instance to the local widgets array. The new widget's pageId is set to the pageId parameter
  createWidget(pageId: string, widget: any) {
    widget._id = new Date().getTime() + '';
    widget.pageId = pageId;
    this._widgets.push(widget);
  }

  // retrieves the widgets in local widgets array whose pageId matches the parameter pageId
  findWidgetsByPageId(pageId: string) {
    return this._widgets.filter(function (widget) {
      return widget.pageId === pageId;
    });
  }

  // retrieves the widget in local widgets array whose _id matches the widgetId parameter
  findWidgetById(widgetId: string) {
    return this._widgets.find(function (widget) {
      return widget._id === widgetId;
    });
  }

  // updates the widget in local widgets array whose _id matches the widgetId parameter
  updateWidget(widgetId: string, widget: any) {
    for (const i in this._widgets) {
      if (this._widgets[i]._id === widgetId) {
        switch (widget.widgetType) {
          case 'HEADER':
            this._widgets[i].text = widget.text;
            this._widgets[i].size = widget.size;
            return true;

          case 'IMAGE':
            this._widgets[i].width = widget.width;
            this._widgets[i].url = widget.url;
            return true;

          case 'YOUTUBE':
            this._widgets[i].width = widget.width;
            this._widgets[i].url = widget.url;
            return true;
        }
      }
    }
    return false;
  }

  // removes the widget from local widgets array whose _id matches the widgetId parameter
  deleteWidget(widgetId: string) {
    for (const i in this._widgets) {
      if (this._widgets[i]._id === widgetId) {
        const j = +i;
        this._widgets.splice(j, 1);
      }
    }
  }
}
