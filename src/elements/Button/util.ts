import {HTMLProps} from 'react'

export function isAnchorElement(
  item: any
): item is HTMLProps<HTMLAnchorElement> {
  return item.href
}
