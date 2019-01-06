import {TableColumn} from './interfaces'

export function isTableCloumn<T>(item: any): item is TableColumn<T> {
  return item.children || item.headingProps
}
