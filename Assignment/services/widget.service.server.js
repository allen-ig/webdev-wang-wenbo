module.exports = function (app) {
  // the widgets array to mimic the data on database
  var widgets = [
    {
      _id: "1",
      widgetType: "HEADER",
      pageId: "13",
      size: "2",
      text: "Hello meow~"
    },
    {
      _id: "2",
      widgetType: "HEADER",
      pageId: "13",
      size: "4",
      text: "I am a cutie meow~meow~"
    },
    {
      _id: "3",
      widgetType: "IMAGE",
      pageId: "13",
      width: "100%",
      url:
        "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827." +
        "jpeg?cs=srgb&dl=animal-animal-photography-cat-104827.jpg&fm=jpg"
    },
    {
      _id: "4",
      widgetType: "HEADER",
      pageId: "13",
      size: "4",
      text: "Here is a cute video for you~"
    },
    {
      _id: "5",
      widgetType: "YOUTUBE",
      pageId: "13",
      width: "100%",
      url: "https://www.youtube.com/embed/rNSnfXl1ZjU"
    },
    {
      _id: "6",
      widgetType: "HEADER",
      pageId: "14",
      size: "2",
      text: "Hello meow~"
    },
    {
      _id: "7",
      widgetType: "HEADER",
      pageId: "15",
      size: "4",
      text: "I am a cutie meow~meow~"
    },
    {
      _id: "8",
      widgetType: "IMAGE",
      pageId: "10",
      width: "100%",
      url:
        "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827." +
        "jpeg?cs=srgb&dl=animal-animal-photography-cat-104827.jpg&fm=jpg"
    },
    {
      _id: "9",
      widgetType: "HEADER",
      pageId: "12",
      size: "4",
      text: "Here is a cute video for you~"
    },
    {
      _id: "11",
      widgetType: "YOUTUBE",
      pageId: "11",
      width: "100%",
      url: "https://www.youtube.com/embed/rNSnfXl1ZjU"
    },
    {
      _id: "22",
      widgetType: "HEADER",
      pageId: "9",
      size: "2",
      text: "Hello meow~"
    },
    {
      _id: "33",
      widgetType: "HEADER",
      pageId: "8",
      size: "4",
      text: "I am a cutie meow~meow~"
    },
    {
      _id: "44",
      widgetType: "IMAGE",
      pageId: "7",
      width: "100%",
      url:
        "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827." +
        "jpeg?cs=srgb&dl=animal-animal-photography-cat-104827.jpg&fm=jpg"
    },
    {
      _id: "55",
      widgetType: "HEADER",
      pageId: "6",
      size: "4",
      text: "Here is a cute video for you~"
    },
    {
      _id: "66",
      widgetType: "YOUTUBE",
      pageId: "5",
      width: "100%",
      url: "https://www.youtube.com/embed/rNSnfXl1ZjU"
    },
    {
      _id: "77",
      widgetType: "HEADER",
      pageId: "4",
      size: "2",
      text: "Hello meow~"
    },
    {
      _id: "88",
      widgetType: "HEADER",
      pageId: "3",
      size: "4",
      text: "I am a cutie meow~meow~"
    },
    {
      _id: "99",
      widgetType: "IMAGE",
      pageId: "2",
      width: "100%",
      url:
        "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827." +
        "jpeg?cs=srgb&dl=animal-animal-photography-cat-104827.jpg&fm=jpg"
    },
    {
      _id: "111",
      widgetType: "HEADER",
      pageId: "1",
      size: "4",
      text: "Here is a cute video for you~"
    },
    {
      _id: "222",
      widgetType: "YOUTUBE",
      pageId: "1",
      width: "100%",
      url: "https://www.youtube.com/embed/rNSnfXl1ZjU"
    }
  ];

  // first sort all the widgets basing on its pageId
  widgets.sort(function (a, b) {
    return parseInt(a.pageId, 10) - parseInt(b.pageId, 10);
  });
  console.log('Sorted widgets...');
  // console.log(widgets);

  // the http calls
  // create a new widget
  app.post("/api/page/:pid/widget", function (req, res) {
    var pageId = req.params.pid;
    var newWidget = req.body;
    console.log("Creating a new widget for page id " + pageId + ": ");
    console.log("Created the following new widget: ");
    console.log(newWidget);
    // then add the widget to the proper location
    const insertIndex = bs(pageId);
    if (insertIndex === -1) {
      widgets.unshift(newWidget);
    } else {
      widgets.splice(insertIndex, 0, newWidget);
    }
    res.status(200).json(newWidget);
    // console.log(widgets);
  });

  // binary search to find the last widget with pageId
  function bs(pageId) {
    if (widgets.length === 0) {
      return -1;
    }
    var target = parseInt(pageId, 10);
    var start = 0;
    var end = widgets.length - 1;
    while (start + 1 < end) {
      var mid = start + Math.floor((end - start) / 2);
      // console.log(mid);
      var pid = parseInt(widgets[mid].pageId, 10);
      if (pid > target) {
        end = mid;
      } else {
        start = mid;
      }
    }
    if (parseInt(widgets[end].pageId, 10) <= target) {
      return end;
    }
    if (parseInt(widgets[start].pageId, 10) <= target) {
      return start;
    }
    return -1;
  }

  // find all widgets for page id
  app.get("/api/page/:pid/widget", function (req, res) {
    var pageId = req.params.pid;
    console.log("Getting all widgets for page id " + pageId + ": ");
    res.status(200).send(
      widgets.filter(function (widget) {
        return widget.pageId == pageId;
      })
    );
  });

  // find widget by its id
  app.get("/api/widget/:wid", function (req, res) {
    var widgetId = req.params.wid;
    console.log("Getting the widget id " + widgetId + ": ");
    res.status(200).json(
      widgets.find(function (widget) {
        return widget._id == widgetId;
      })
    );
  });

  // update a widget by its id
  app.put("/api/widget/:wid", function (req, res) {
    var widgetId = req.params.wid;
    var newWidget = req.body;
    console.log("Updating the widget id " + widgetId + ": ");
    for (var i = 0; i < widgets.length; i++) {
      if (widgets[i]._id == widgetId) {
        switch (newWidget.widgetType) {
          case "HEADER":
            widgets[i].text = newWidget.text;
            widgets[i].size = newWidget.size;
            console.log("Updated to new widget: ");
            console.log(widgets[i]);
            res.status(200).json(widgets[i]);
            return;

          case "IMAGE":
            widgets[i].width = newWidget.width;
            widgets[i].url = newWidget.url;
            console.log("Updated to new widget: ");
            console.log(widgets[i]);
            res.status(200).json(widgets[i]);
            return;

          case "YOUTUBE":
            widgets[i].width = newWidget.width;
            widgets[i].url = newWidget.url;
            console.log("Updated to new widget: ");
            console.log(widgets[i]);
            res.status(200).json(widgets[i]);
            return;
        }
      }
    }
    res.send(null);
  });

  // delete widget
  app.delete("/api/widget/:wid", function (req, res) {
    var widgetId = req.params.wid;
    console.log("Deleting the widget id " + widgetId + ": ");
    for (var i = 0; i < widgets.length; i++) {
      if (widgets[i]._id == widgetId) {
        console.log("Deleted the widget: ");
        console.log(widgets[i]);
        res.status(200).json(widgets[i]);
        widgets.splice(i, 1);
        return;
      }
    }
    res.send(null);
  });

  // update the order of the widget in the database array
  app.put('/api/page/:pid/widget', function (req, res) {
    const pageId = req.params.pid;
    var startIndex = parseInt(req.query.initial, 10);
    var endIndex = parseInt(req.query.final, 10);
    // console.log(typeof startIndex);
    // then find the first widget of the pageId
    var firstIndex = 0;
    for (var i = 0; i < widgets.length; i++) {
      if (widgets[i].pageId === pageId) {
        firstIndex = i;
        break;
      }
    }
    // then update both start and end index
    startIndex += firstIndex;
    endIndex += firstIndex;
    // then process
    console.log('Moving widget at index ' + startIndex + ' to index ' + endIndex + ' for page id ' + pageId + ': ');
    const item = widgets[startIndex];
    console.log('Now finished moving the widget: ');
    res.status(200).json(item);
    widgets.splice(startIndex, 1);
    widgets.splice(endIndex, 0, item);
  });
};
