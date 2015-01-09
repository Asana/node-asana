var Readable = require('stream').Readable;
var util = require('util');

//xcxc comment

function BufferedReadable(options) {
  Readable.call(this, options);
  this._buffer = [];
}

util.inherits(EventStream, Readable);

BufferedReadable.prototype._read = function() {
  // Empty buffer of events, if we can.
  if (this._buffer.length > 0) {
    for (var i = 0; i < this._buffer.length; i++) {
      if (!this.push(this._buffer[i])) {
        this._buffer = this._buffer.slice(i);
        return;
      }
    }
    this._buffer = [];
  }
  // Fill the buffer
  this._readUnbuffered();
};

BufferedReadable.prototype._pushBuffered = function(object) {
  var buffering = this._buffer.length > 0;
  if (!buffering && !this.push(object)) {
    buffering = true;
  }
  if (buffering) {
    this._buffer.push(object);
  }
  return !buffering;
};

BufferedReadable.prototype._readUnbuffered = function() {
  throw new Error("not implemented");
};

module.exports = EventStream;