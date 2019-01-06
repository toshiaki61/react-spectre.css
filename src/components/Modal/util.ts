import {ModalChildrenProps} from './interfaces'

export function hasModalChildren(item: any): item is ModalChildrenProps {
  return item.children
}
