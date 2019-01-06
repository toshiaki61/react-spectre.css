import {TabChildrenProps} from './interfaces'

export function hasTabChildren(item: any): item is TabChildrenProps {
  return item.children
}
