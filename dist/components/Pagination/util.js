export function calculateStartAndEnd(current, total, each) {
    if (total <= 2 * each + 5) {
        return { start: 1, end: total };
    }
    if (current <= each + 3) {
        return { start: 1, end: 2 * each + 3 };
    }
    if (current >= total - (each + 2)) {
        return { start: total - 2 * each - 2, end: total };
    }
    return { start: current - each, end: current + each };
}
export function pages(current, total, each, skip) {
    if (each === void 0) { each = 1; }
    if (skip === void 0) { skip = '...'; }
    var page = calculateStartAndEnd(current, total, each);
    var result = [];
    if (page.start > 1) {
        result.push({ label: '1', value: 1 });
    }
    if (page.start > 2) {
        result.push({ label: skip, value: 0 });
    }
    for (var i = page.start; i <= page.end; i += 1) {
        result.push({ label: "" + i, value: i });
    }
    if (page.end < total - 1) {
        result.push({ label: skip, value: 0 });
    }
    if (page.end < total) {
        result.push({ label: "" + total, value: total });
    }
    return result;
}
export function hasPaginationChildren(item) {
    return item.children;
}
export function hasPaginationTitle(item) {
    return item.title;
}
//# sourceMappingURL=util.js.map