import * as tslib_1 from "tslib";
import { eachDay, endOfWeek, format, startOfWeek } from 'date-fns';
import React, { Component } from 'react';
import Popover from '../components/Popover';
import Calendar from '../experimentals/Calendar';
var CalendarExample = /** @class */ (function (_super) {
    tslib_1.__extends(CalendarExample, _super);
    function CalendarExample(props) {
        var _this = _super.call(this, props) || this;
        _this.onMonthClick = function (e, m) {
            return _this.setState({ current: m });
        };
        _this.onClick = function () { return _this.setState({ active: !_this.state.active }); };
        _this.state = {
            active: false,
            current: new Date(),
        };
        _this.weekdays = eachDay(startOfWeek(_this.state.current), endOfWeek(_this.state.current)).reduce(function (acc, d) {
            acc.push(format(d, 'dd'));
            return acc;
        }, []);
        return _this;
    }
    CalendarExample.prototype.render = function () {
        var current = this.state.current;
        return (React.createElement(Popover, { target: React.createElement("div", null, "PopOver"), bottom: true },
            React.createElement(Calendar, { current: current, onMonthClick: this.onMonthClick, onDateClick: this.onClick, weekdays: this.weekdays })));
    };
    return CalendarExample;
}(Component));
export default CalendarExample;
//# sourceMappingURL=Calendar.js.map