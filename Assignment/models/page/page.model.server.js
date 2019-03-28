const mongoose = require('mongoose');
const pageSchema = require('./page.schema.server');

const pageModel = mongoose.model('Page', pageSchema, 'Pages');

pageModel.createPage = createPage;
pageModel.findAllPagesForWebsite = findAllPagesForWebsite;
pageModel.findPageById = findPageById;
pageModel.updatePage = updatePage;
pageModel.deletePage = deletePage;

module.exports = pageModel;

// now implement the functions of pageModel
function createPage(page) {
  return pageModel.create(page);
}

function findAllPagesForWebsite(wid) {
  return pageModel.find({websiteId: wid});
}

function findPageById(pid) {
  return pageModel.findById(pid);
}

function updatePage(pid, page) {
  return pageModel.findByIdAndUpdate(
    pid,
    {
      $set: {
        name: page.name,
        title: page.title
      }
    },
    {new: true});
}

function deletePage(pid) {
  return pageModel.findByIdAndRemove(pid);
}
