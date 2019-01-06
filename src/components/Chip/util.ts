import {ChipChildrenProps} from './interfaces'

export function hasChipChildren(item: any): item is ChipChildrenProps {
  return item.children
}
