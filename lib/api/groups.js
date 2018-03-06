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
  var group = {
    name: name,
    wid: workspaceId
  };

  if (!this.validateOptions('group-create', group, callback)) {
    return;
  }

  var req = {
    method: 'POST',
    body: {
      group: group
    }
  };

  this.apiRequest('/api/v8/groups', req, utils.wrapDataCallback(callback));
};


/**
 * @see https://github.com/toggl/toggl_api_docs/blob/master/chapters/Groups.md#delete-a-Group
 * @public
 * @param {Number|String} groupId Group Id
 * @param {Function} callback <code>(err)</code>
 */
TogglClient.prototype.deleteGroup = function deleteGroup(groupId, callback) {
  var req = {
    method: 'DELETE'
  };

  this.apiRequest('/api/v8/groups/' + groupId, req, callback);
};


/**
 * @see https://github.com/toggl/toggl_api_docs/blob/master/chapters/Groups.md#update-a-Group
 * @public
 * @param {Number|String} groupId Group Id
 * @param {String} name New Group name
 * @param {Function} callback <code>(err, Group)</code>
 */
TogglClient.prototype.updateGroupName = function updateGroupName(groupId, name,
  callback) {
  var group = {
    name: name
  };

  if (!this.validateOptions('group-update', group, callback)) {
    return;
  }

  var req = {
    method: 'PUT',
    body: {
      group: group
    }
  };

  this.apiRequest('/api/v8/groups/' + GroupId, req,
    utils.wrapDataCallback(callback));
};
