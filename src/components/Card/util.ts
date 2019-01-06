import {CardChildrenProps, CardItemHeaderProps} from './interfaces'

export function isCardItemHeader(item: any): item is CardItemHeaderProps {
  return item.button && item.title
}

export function hasCardChildren(item: any): item is CardChildrenProps {
  return item.children
}
