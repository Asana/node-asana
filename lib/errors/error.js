function AsanaError(message) {
  this.message = message;
  try {
    throw new Error(message);
  } catch (e) {
    this.stack = e.stack;
  }
}

AsanaError.prototype = Object.create(Error.prototype);

module.exports = AsanaError;