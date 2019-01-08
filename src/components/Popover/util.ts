import {PopoverChildrenProps} from './interfaces'

export function hasPopoverChildren(item: any): item is PopoverChildrenProps {
  return item.children
}
