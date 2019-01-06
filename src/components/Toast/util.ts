import {ToastChildrenProps} from './interfaces'

export function hasToastChildren(item: any): item is ToastChildrenProps {
  return item.children
}
