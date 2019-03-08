import * as tslib_1 from "tslib";
import React, { Component } from 'react';
import { addMonths, eachDay, endOfWeek, format, startOfWeek } from 'date-fns';
import { Popover } from '@components/Popover';
import { Calendar } from '@experimentals/Calendar';
var CalendarExample = /** @class */ (function (_super) {
    tslib_1.__extends(CalendarExample, _super);
    function CalendarExample(props) {
        var _this = _super.call(this, props) || this;
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
        var _this = this;
        var current = this.state.current;
        var dateClick = function (e, date) { return console.log(date); };
        var prevClick = function () {
            _this.setState(function (s) { return ({ current: addMonths(s.current, -1) }); });
        };
        var nextClick = function () {
            _this.setState(function (s) { return ({ current: addMonths(s.current, 1) }); });
        };
        return (React.createElement(Popover, { target: React.createElement("div", null, "PopOver"), position: "bottom" },
            React.createElement(Calendar, { current: current, 
                // onMonthClick={this.onMonthClick}
                nav: {
                    current: format(current, 'MMMM YYYY'),
                    prev: { onClick: prevClick },
                    next: { onClick: nextClick },
                }, onDateClick: dateClick, weekdays: this.weekdays })));
    };
    return CalendarExample;
}(Component));
export default CalendarExample;
//# sourceMappingURL=Calendar.js.map