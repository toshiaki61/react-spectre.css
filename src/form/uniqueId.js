/* @flow */
const current = {};
const uniqueId = (prefix: string = '') => {
  if (!current[prefix]) {
    current[prefix] = 0;
  }
  // eslint-disable-next-line no-return-assign
  return (`${prefix}-${current[prefix] += 1}`);
};

export default uniqueId;
