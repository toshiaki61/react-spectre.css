import * as React from 'react'

export function isAnchorElement(
  item: any
): item is React.HTMLProps<HTMLAnchorElement> {
  return item.href
}
