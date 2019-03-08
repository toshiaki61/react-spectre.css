import React from 'react';
import { Tile, TileAction, TileSubtitle, TileTitle, TileContent, } from '@components/index';
import { Icon } from '@elements/Icon';
import { hasTimelineChildren } from './util';
import TimelineContent from './TimelineContent';
import TimelineIcon from './TimelineIcon';
import TimelineItem from './TimelineItem';
import TimelineLeft from './TimelineLeft';
function renderTimeline(p) {
    if (hasTimelineChildren(p)) {
        return p.children;
    }
    var timelines = p.timelines;
    return timelines.map(function (_a, i) {
        var title = _a.title, content = _a.content, action = _a.action;
        var key = "timeline-" + i;
        var first = i === 0;
        return (React.createElement(TimelineItem, { key: key, id: key },
            React.createElement(TimelineLeft, null,
                React.createElement(TimelineIcon, { id: key, tooltip: title, lg: !first }, first ? null : React.createElement(Icon, { type: "check" }))),
            React.createElement(TimelineContent, null,
                React.createElement(Tile, null,
                    React.createElement(TileContent, null,
                        React.createElement(TileSubtitle, null, title),
                        Array.isArray(content) ? (content.map(function (c) { return React.createElement(TileTitle, null, c); })) : (React.createElement(TileTitle, null, content))),
                    action ? React.createElement(TileAction, null, action) : null))));
    });
}
var Timeline = function (p) { return (React.createElement("div", { className: "timeline" }, renderTimeline(p))); };
export default Timeline;
//# sourceMappingURL=Timeline.js.map