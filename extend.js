// @preserve extendjs, copyright Matthew Parke 2014, license https://github.com/mparke/eventsjs/blob/master/LICENSE
(function (window, Array) {
  var slice = Array.prototype.slice;

  function extend () {
    var args = slice.call(arguments);

    if (!args.length) {
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
    define(function () { return extend; });
  } else {
    window.extend = extend;
  }
})(window, Array);
