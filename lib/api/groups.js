'use strict';

var TogglClient = require('../client');
var utils = require('../utils');


/**
 * @see https://github.com/toggl/toggl_api_docs/blob/master/chapters/Groups.md#create-Group
 * @public
 * @param {String} name Group name
 * @param {Number|String} workspaceId Workspace ID
 * @param {Function} callback <code>(err, Group)</code>
 */
TogglClient.prototype.createGroup = function createGroup(name, workspaceId,
  callback) {
  var Group = {
    name: name,
    wid: workspaceId
  };

  if (!this.validateOptions('Group-create', Group, callback)) {
    return;
  }

  var req = {
    method: 'POST',
    body: {
      Group: Group
    }
  };

  this.apiRequest('/api/v8/Groups', req, utils.wrapDataCallback(callback));
};


/**
 * @see https://github.com/toggl/toggl_api_docs/blob/master/chapters/Groups.md#delete-a-Group
 * @public
 * @param {Number|String} GroupId Group Id
 * @param {Function} callback <code>(err)</code>
 */
TogglClient.prototype.deleteGroup = function deleteGroup(GroupId, callback) {
  var req = {
    method: 'DELETE'
  };

  this.apiRequest('/api/v8/Groups/' + GroupId, req, callback);
};


/**
 * @see https://github.com/toggl/toggl_api_docs/blob/master/chapters/Groups.md#update-a-Group
 * @public
 * @param {Number|String} GroupId Group Id
 * @param {String} name New Group name
 * @param {Function} callback <code>(err, Group)</code>
 */
TogglClient.prototype.updateGroupName = function updateGroupName(GroupId, name,
  callback) {
  var Group = {
    name: name
  };

  if (!this.validateOptions('Group-update', Group, callback)) {
    return;
  }

  var req = {
    method: 'PUT',
    body: {
      Group: Group
    }
  };

  this.apiRequest('/api/v8/Groups/' + GroupId, req,
    utils.wrapDataCallback(callback));
};
