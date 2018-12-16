import classnames from 'classnames';
import React from 'react';
import Icon from '../elements/Icon';
var Timeline = function (_a) {
    var children = _a.children, timelines = _a.timelines;
    var timeline = children.map(function (child, i) {
        var key = "timeline-" + i;
        var first = i === 0;
        return (React.createElement("div", { key: key, className: "timeline-item", id: key },
            React.createElement("div", { className: classnames('timeline-left', { 'icon-lg': first }) },
                React.createElement("a", { href: "#" + key, className: classnames('timeline-icon', 'tooltip', {
                        'icon-lg': !first,
                    }), "data-tooltip": timelines[i] || '' },
                    React.createElement(Icon, { check: !first }))),
            React.createElement("div", { className: "timeline-content" }, child)));
    });
    return React.createElement("div", { className: "timeline" }, timeline);
};
Timeline.defaultProps = {};
export default Timeline;
//# sourceMappingURL=Timeline.js.map