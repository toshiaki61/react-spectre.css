import {NavChildrenProps} from './interfaces'

export function hasNavChildren(item: any): item is NavChildrenProps {
  return item.children
}
