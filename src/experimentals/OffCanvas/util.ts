import {OffCanvasChildrenProps} from './interfaces'

export function hasOffCanvasChildren(
  item: any
): item is OffCanvasChildrenProps {
  return item.children
}
