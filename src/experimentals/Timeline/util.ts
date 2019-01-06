import {TimelineChildrenProps} from './interfaces'

export function hasTimelineChildren(item: any): item is TimelineChildrenProps {
  return item.children
}
