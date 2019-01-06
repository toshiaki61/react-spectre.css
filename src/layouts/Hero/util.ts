import {HeroChildrenProps} from './interfaces'

export function hasHeroChildren(item: any): item is HeroChildrenProps {
  return item.children
}
