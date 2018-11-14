import classnames from 'classnames'
import React, {ReactElement, ReactNodeArray} from 'react'
import Icon from '../elements/Icon'

export interface ITimelineProps {
  children: ReactNodeArray
  timelines: string[]
}
const Timeline = ({
  children,
  timelines,
}: ITimelineProps): ReactElement<ITimelineProps> => {
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
