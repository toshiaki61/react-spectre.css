import {FilterChildrenProps} from './interfaces'

export function hasFilterChildren(item: any): item is FilterChildrenProps {
  return item.children
}
