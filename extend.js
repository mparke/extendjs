module.exports = function () {
  var args = Array.prototype.slice.call(arguments);

  if (!args.length) {
    throw new Error('Extend must have at least 2 objects as arguments.');
  }

  return args.reduce(function (previous, current, index, arr) {
    for (var index in current) {
      previous[index] = current[index];
    }
    return previous;
  });
};
