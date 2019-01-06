import {Viewer360ChildrenProps} from './interfaces'

export function hasViewer360Children(
  item: any
): item is Viewer360ChildrenProps {
  return item.children
}
