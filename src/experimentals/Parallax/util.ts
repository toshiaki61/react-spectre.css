import {ParallaxChildrenProps} from './interfaces'

export function hasParallaxChildren(item: any): item is ParallaxChildrenProps {
  return item.children
}
