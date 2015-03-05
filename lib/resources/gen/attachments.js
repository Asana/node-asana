var util = require('util');
var _ = require('lodash');

module.exports = function(SuperType) {

  /**
   * An _attachment_ object represents any file attached to a task in Asana,
   * whether it's an uploaded file or one associated via a third-party service
   * such as Dropbox or Google Drive.
   * @class
   * @param {Dispatcher} dispatcher The API dispatcher
   */
  function Attachments(dispatcher) {
    SuperType.call(this, dispatcher);
  }
  util.inherits(Attachments, SuperType);

  
  /**
   * Returns the full record for a single attachment.
   * @param {Number} attachment Globally unique identifier for the attachment.
   * @param {Object} [params] Parameters for the request
   * @return {Promise} The requested resource
   */
  Attachments.prototype.findById = function(
      attachment,
      params
  ) {
    var path = util.format('/attachments/%d', attachment);
    
    return this.dispatchGet(path, params);
  };

  /**
   * Returns the compact records for all attachments on the task.
   * @param {Number} task Globally unique identifier for the task.
   * @param {Object} [params] Parameters for the request
   * @return {Promise} The response from the API
   */
  Attachments.prototype.findByTask = function(
      task,
      params
  ) {
    var path = util.format('/tasks/%d/attachments', task);
    
    return this.dispatchGetCollection(path, params);
  };


  return Attachments;
};
