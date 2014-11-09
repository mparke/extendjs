// @preserve extendjs, copyright Matthew Parke 2014, license https://github.com/mparke/eventsjs/blob/master/LICENSE
(function (window, Array) {
  var slice = Array.prototype.slice;

<<<<<<< HEAD:src/extend.js
  function extend() {
=======
  /**
  *  Extends an object with any number of other objects
  *  @param {object} the base object to extend
  *  @param {object} any number of additional objects
  *  @return {object} the extended base object
  */
  function extend () {
>>>>>>> bf1648c171ebc42eaac6ced64a3daebd60dc3be4:extend.js
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
