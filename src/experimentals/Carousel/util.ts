import {CarouselChildrenProps} from './interfaces'

export function hasCarouselChildren(item: any): item is CarouselChildrenProps {
  return item.children
}
