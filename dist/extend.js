/**
 * extendjs - Extend Module
 * @version v0.1.0
 * @copyright Matthew Parke <mparke78@gmail.com> 2014
 * @license MIT
 */
(function (window, Array) {
  var slice = Array.prototype.slice;

  /**
  *  Extends an object with any number of other objects
  *  @param {object} the base object to extend
  *  @param {object} any number of additional objects
  *  @return {object} the extended base object
  */
  function extend () {
    var args = slice.call(arguments);

    if (args.length < 2) {
      throw new Error('Extend must have at least 2 objects as arguments.');
    }

    return args.reduce(function (previous, current, index, arr) {
      for (var index in current) {
        previous[index] = current[index];
      }
      return previous;
    });
  }

  if (typeof module === 'object') {
    module.exports = extend;
  } else if (typeof define === 'function') {
    define(function() { return extend; });
  } else {
    window.extend = extend;
  }
})(window, Array);
