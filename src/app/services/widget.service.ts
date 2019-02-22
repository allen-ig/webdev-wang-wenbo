import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {
  private _widgets = [
    {_id: '1', widgetType: 'HEADER', pageId: '13', size: '2', text: 'Hello meow~'},
    {_id: '2', widgetType: 'HEADER', pageId: '13', size: '4', text: 'I am a cutie meow~meow~'},
    {
      _id: '3',
      widgetType: 'IMAGE',
      pageId: '13',
      width: '100%',
      url: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.' +
        'jpeg?cs=srgb&dl=animal-animal-photography-cat-104827.jpg&fm=jpg'
    },
    {_id: '4', widgetType: 'HEADER', pageId: '13', size: '4', text: 'Here is a cute video for you~'},
    {_id: '5', widgetType: 'YOUTUBE', pageId: '13', width: '100%', url: 'https://www.youtube.com/embed/rNSnfXl1ZjU'},
    {_id: '6', widgetType: 'HEADER', pageId: '14', size: '2', text: 'Hello meow~'},
    {_id: '7', widgetType: 'HEADER', pageId: '15', size: '4', text: 'I am a cutie meow~meow~'},
    {
      _id: '8',
      widgetType: 'IMAGE',
      pageId: '10',
      width: '100%',
      url: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.' +
        'jpeg?cs=srgb&dl=animal-animal-photography-cat-104827.jpg&fm=jpg'
    },
    {_id: '9', widgetType: 'HEADER', pageId: '12', size: '4', text: 'Here is a cute video for you~'},
    {_id: '11', widgetType: 'YOUTUBE', pageId: '11', width: '100%', url: 'https://www.youtube.com/embed/rNSnfXl1ZjU'},
    {_id: '22', widgetType: 'HEADER', pageId: '9', size: '2', text: 'Hello meow~'},
    {_id: '33', widgetType: 'HEADER', pageId: '8', size: '4', text: 'I am a cutie meow~meow~'},
    {
      _id: '44',
      widgetType: 'IMAGE',
      pageId: '7',
      width: '100%',
      url: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.' +
        'jpeg?cs=srgb&dl=animal-animal-photography-cat-104827.jpg&fm=jpg'
    },
    {_id: '55', widgetType: 'HEADER', pageId: '6', size: '4', text: 'Here is a cute video for you~'},
    {_id: '66', widgetType: 'YOUTUBE', pageId: '5', width: '100%', url: 'https://www.youtube.com/embed/rNSnfXl1ZjU'},
    {_id: '77', widgetType: 'HEADER', pageId: '4', size: '2', text: 'Hello meow~'},
    {_id: '88', widgetType: 'HEADER', pageId: '3', size: '4', text: 'I am a cutie meow~meow~'},
    {
      _id: '99',
      widgetType: 'IMAGE',
      pageId: '2',
      width: '100%',
      url: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.' +
        'jpeg?cs=srgb&dl=animal-animal-photography-cat-104827.jpg&fm=jpg'
    },
    {_id: '111', widgetType: 'HEADER', pageId: '1', size: '4', text: 'Here is a cute video for you~'},
    {_id: '222', widgetType: 'YOUTUBE', pageId: '1', width: '100%', url: 'https://www.youtube.com/embed/rNSnfXl1ZjU'}
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
