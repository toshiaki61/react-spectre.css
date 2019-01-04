import React, {ReactElement} from 'react'

import {Tile, TileSubtitle} from '@components/index'
import {Icon} from '@elements/Icon'

import {TimelineProps} from './interfaces'

import TimelineContent from './TimelineContent'
import TimelineIcon from './TimelineIcon'
import TimelineItem from './TimelineItem'
import TimelineLeft from './TimelineLeft'

const Timeline = ({
  children,
  timelines,
}: TimelineProps): ReactElement<TimelineProps> => (
  <div className="timeline">
    {children
      ? children
      : timelines &&
        timelines.map(({title, content}, i) => {
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
                  <TileSubtitle>{title}</TileSubtitle>
                  {content}
                </Tile>
              </TimelineContent>
            </TimelineItem>
          )
        })}
  </div>
)

export default Timeline
