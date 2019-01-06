import {TileChildrenProps} from './interfaces'

export function hasTileChildren(item: any): item is TileChildrenProps {
  return item.children
}
