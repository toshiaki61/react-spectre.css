import {
  MenuChildrenProps,
  MenuItemChildrenProps,
  MenuItemDividerProps,
} from './interfaces'

export function hasMenuChildren(item: any): item is MenuChildrenProps {
  return item.children
}

export function isMenuItemDivider(item: any): item is MenuItemDividerProps {
  return item.divider
}

export function hasMenuItemChildren(item: any): item is MenuItemChildrenProps {
  return item.children
}
