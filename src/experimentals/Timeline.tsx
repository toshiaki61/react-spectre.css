import React, {ReactElement} from 'react'
import classnames from 'classnames'
import Icon from '../elements/Icon'

export interface TimelineProps {
  children: Array<ReactElement<any>>
  timelines: Array<string>
}
const Timeline = ({
  children,
  timelines,
}: TimelineProps): ReactElement<TimelineProps> => {
  const timeline = children.map((child, i) => {
    const key = `timeline-${i}`
    const first = i === 0
    return (
      <div key={key} className="timeline-item" id={key}>
        <div className={classnames('timeline-left', {'icon-lg': first})}>
          <a
            href={`#${key}`}
            className={classnames('timeline-icon', 'tooltip', {
              'icon-lg': !first,
            })}
            data-tooltip={timelines[i] || ''}
          >
            <Icon check={!first} />
          </a>
        </div>
        <div className="timeline-content">{child}</div>
      </div>
    )
  })
  return <div className="timeline">{timeline}</div>
}
Timeline.defaultProps = {}
export default Timeline
