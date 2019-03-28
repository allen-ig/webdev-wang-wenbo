const mongoose = require('mongoose');
const widgetSchema = require('./widget.schema.server');

const widgetModel = mongoose.model('Widget', widgetSchema, 'Widgets');
const pageModel = require('../page/page.model.server');

widgetModel.createWidget = createWidget;
widgetModel.findAllWidgetsForPage = findAllWidgetsForPage;
widgetModel.findWidgetById = findWidgetById;
widgetModel.updateWidget = updateWidget;
widgetModel.deleteWidget = deleteWidget;
widgetModel.reorderWidget = reorderWidget;

module.exports = widgetModel;

// now implement the functions of widgetModel
function createWidget(widget) {
  return widgetModel.create(widget);
}

function findAllWidgetsForPage(pid) {
  return widgetModel.find({pageId: pid});
}

function findWidgetById(wid) {
  return widgetModel.findById(wid);
}

function updateWidget(wid, widget) {
  return widgetModel.findByIdAndUpdate(
    wid,
    {
      $set: {
        name: widget.name,
        text: widget.text,
        placeholder: widget.placeholder,
        description: widget.description,
        url: widget.url,
        width: widget.width,
        height: widget.height,
        rows: widget.rows,
        size: widget.size,
        class: widget.class,
        icon: widget.icon,
        deletable: widget.deletable,
        formatted: widget.formatted,
        position: widget.position,
      }
    },
    {new: true}
  );
}

function deleteWidget(wid) {
  return widgetModel.findByIdAndRemove(wid);
}

function reorderWidget(pid) {
  return pageModel.findById(pid);
}
