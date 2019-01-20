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
        return (<TimelineItem key={key} id={key}>
        <TimelineLeft>
          <TimelineIcon id={key} tooltip={title} lg={!first}>
            {first ? null : <Icon type="check"/>}
          </TimelineIcon>
        </TimelineLeft>
        <TimelineContent>
          <Tile>
            <TileContent>
              <TileSubtitle>{title}</TileSubtitle>
              {Array.isArray(content) ? (content.map(function (c) { return <TileTitle>{c}</TileTitle>; })) : (<TileTitle>{content}</TileTitle>)}
            </TileContent>
            {action ? <TileAction>{action}</TileAction> : null}
          </Tile>
        </TimelineContent>
      </TimelineItem>);
    });
}
var Timeline = function (p) { return (<div className="timeline">{renderTimeline(p)}</div>); };
export default Timeline;
//# sourceMappingURL=Timeline.jsx.map