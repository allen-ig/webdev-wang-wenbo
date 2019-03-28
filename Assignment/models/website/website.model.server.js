const mongoose = require('mongoose');
const websiteSchema = require('./website.schema.server');

const websiteModel = mongoose.model('Website', websiteSchema, 'Websites');

websiteModel.createWebsiteForUser = createWebsiteForUser;
websiteModel.findAllWebsitesForUser = findAllWebsitesForUser;
websiteModel.findWebsiteById = findWebsiteById;
websiteModel.updateWebsite = updateWebsite;
websiteModel.deleteWebsite = deleteWebsite;

module.exports = websiteModel;

// now implement the functions of websiteModel
function createWebsiteForUser(website) {
  return websiteModel.create(website);
}

function findAllWebsitesForUser(uid) {
  return websiteModel.find({developerId: uid});
}

function findWebsiteById(wid) {
  return websiteModel.findById(wid);
}

function updateWebsite(wid, website) {
  return websiteModel.findByIdAndUpdate(
    wid,
    {
      $set: {
        name: website.name,
        description: website.description
      }
    },
    {new: true});
}

function deleteWebsite(wid) {
  return websiteModel.findByIdAndRemove(wid);
}
