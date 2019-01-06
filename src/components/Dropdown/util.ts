import {DropdownChildrenProps} from './interfaces'

export function hasDropdownChildren(item: any): item is DropdownChildrenProps {
  return item.children
}
