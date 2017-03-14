var Readable = require('stream').Readable;
var util = require('util');

/**
 * Creates a readable stream that contains a buffer in case downstream
 * pushes back. This is useful for streams that are populated by "expensive"
 * requests that return batches of data, because it provides signal (via the
 * `_pushUnbuffered` call) as to whether it is buffering.
 *
 * This is preferable to just piping to some kind of buffering stream,
 * because we want to be aware of whether or not we are buffered downstream,
 * to avoid making requests from upstream until necessary. If we piped to a
 * pure buffering stream it would only make sense for its `push` call to signal
 * whether the buffer was full, which is not helpful for our use case.
 *
 * Instances must override `_readUnbuffered` instead of `_read`, and call
 * `pushBuffered` instead of `push`.
 *
 * @param {Object} options Options for `Readable`.
 * @constructor
 */
function BufferedReadable(options) {
  Readable.call(this, options);
  this._buffer = [];
}

util.inherits(BufferedReadable, Readable);

BufferedReadable.prototype._read = function() {
  // Drain buffer.
  if (this._buffer.length > 0) {
    for (var i = 0; i < this._buffer.length; i++) {
      if (!this.push(this._buffer[i])) {
        this._buffer = this._buffer.slice(i + 1);
        return;
      }
    }
    this._buffer = [];
  }
  // Fill the buffer
  this._readUnbuffered();
};

BufferedReadable.prototype.pushBuffered = function(object) {
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
  throw new Error('not implemented');
};

module.exports = BufferedReadable;
