var current = {};
var uniqueId = function (prefix) {
    if (prefix === void 0) { prefix = ''; }
    if (!current[prefix]) {
        current[prefix] = 0;
    }
    return prefix + "-" + (current[prefix] += 1);
};
export default uniqueId;
//# sourceMappingURL=uniqueId.js.map