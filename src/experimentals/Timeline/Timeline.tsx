import * as React from 'react'

import {
  Tile,
  TileAction,
  TileSubtitle,
  TileTitle,
  TileContent,
} from '../../components'
import {Icon} from '../../elements/Icon'

import {TimelineProps} from './interfaces'
import {hasTimelineChildren} from './util'

import TimelineContent from './TimelineContent'
import TimelineIcon from './TimelineIcon'
import TimelineItem from './TimelineItem'
import TimelineLeft from './TimelineLeft'

function renderTimeline(p: TimelineProps) {
  if (hasTimelineChildren(p)) {
    return p.children
  }
  const {timelines} = p
  return timelines.map(({title, content, action}, i) => {
    const key = `timeline-${i}`
    const first = i === 0
    return (
      <TimelineItem key={key} id={key}>
        <TimelineLeft>
          <TimelineIcon id={key} tooltip={title} lg={!first}>
            {first ? null : <Icon type="check" />}
          </TimelineIcon>
        </TimelineLeft>
        <TimelineContent>
          <Tile>
            <TileContent>
              <TileSubtitle>{title}</TileSubtitle>
              {Array.isArray(content) ? (
                content.map(c => <TileTitle>{c}</TileTitle>)
              ) : (
                <TileTitle>{content}</TileTitle>
              )}
            </TileContent>
            {action ? <TileAction>{action}</TileAction> : null}
          </Tile>
        </TimelineContent>
      </TimelineItem>
    )
  })
}
const Timeline: React.FC<TimelineProps> = p => (
  <div className="timeline">{renderTimeline(p)}</div>
)

export default Timeline
