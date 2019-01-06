import {BreadcrumbChildrenProps} from './interfaces'

export function hasBreadcrumbChildren(
  item: any
): item is BreadcrumbChildrenProps {
  return item.children
}
