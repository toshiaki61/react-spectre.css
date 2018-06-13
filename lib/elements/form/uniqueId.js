
var current = {};
var uniqueId = function uniqueId() {var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  if (!current[prefix]) {
    current[prefix] = 0;
  }
  // eslint-disable-next-line no-return-assign
  return prefix + '-' + (current[prefix] += 1);
};

export default uniqueId;