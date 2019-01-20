import { addDays, differenceInCalendarDays, endOfMonth, endOfWeek, isAfter, isBefore, isEqual, isSameDay, isSameMonth, startOfMonth, startOfWeek, } from 'date-fns';
import { compose, range } from 'ramda';
export function isBeforeMonth(date, target) {
    return isBefore(date, target) && !isSameMonth(date, target);
}
export function isAfterMonth(date, target) {
    return isAfter(date, target) && !isSameMonth(date, target);
}
export function isBetween(date, from, to, inclusivity) {
    if (inclusivity === void 0) { inclusivity = '()'; }
    if (!['()', '[]', '(]', '[)'].includes(inclusivity)) {
        throw new Error('Inclusivity parameter must be one of (), [], (], [)');
    }
    var isBeforeEqual = inclusivity[0] === '[';
    var isAfterEqual = inclusivity[1] === ']';
    return ((isBeforeEqual
        ? isEqual(from, date) || isBefore(from, date)
        : isBefore(from, date)) &&
        (isAfterEqual ? isEqual(to, date) || isAfter(to, date) : isAfter(to, date)));
}
export var startOfCalendarWeek = compose(startOfWeek, startOfMonth);
export var endOfCalendarWeek = compose(endOfWeek, endOfMonth);
export function generateCalendarData(current, options) {
    var start = startOfCalendarWeek(current);
    var end = endOfCalendarWeek(current);
    var o = options || {
        data: [],
        range: [],
    };
    return range(0, differenceInCalendarDays(end, start) + 1).map(function (d) {
        var date = addDays(start, d);
        var same = isSameMonth(date, current);
        var before = isBeforeMonth(date, current);
        var after = isAfterMonth(date, current);
        var foundSameDay = o.data.find(function (datum) { return isSameDay(date, datum.date); });
        // console.log(options && options.data)
        var foundBetween = o.range.find(function (r) {
            return isBetween(date, r.start, r.end, '[]');
        });
        var rangeStart = foundBetween && isSameDay(date, foundBetween.start);
        var rangeEnd = foundBetween && isSameDay(date, foundBetween.end);
        return {
            date: date,
            same: same,
            before: before,
            after: after,
            foundSameDay: foundSameDay,
            foundBetween: foundBetween,
            rangeStart: rangeStart,
            rangeEnd: rangeEnd,
        };
    });
}
export function hasCalendarChildren(item) {
    return item.children;
}
//# sourceMappingURL=util.js.map