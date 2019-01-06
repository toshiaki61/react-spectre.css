import {ReactNode} from 'react'

import {Page, PaginationChildrenProps, PaginationTitleProps} from './interfaces'

export function calculateStartAndEnd(
  current: number,
  total: number,
  each: number
): {
  start: number
  end: number
} {
  if (total <= 2 * each + 5) {
    return {start: 1, end: total}
  }
  if (current <= each + 3) {
    return {start: 1, end: 2 * each + 3}
  }
  if (current >= total - (each + 2)) {
    return {start: total - 2 * each - 2, end: total}
  }
  return {start: current - each, end: current + each}
}

export function pages(
  current: number,
  total: number,
  each: number = 1,
  skip: ReactNode = '...'
): Page[] {
  const page = calculateStartAndEnd(current, total, each)
  const result: Page[] = []
  if (page.start > 1) {
    result.push({label: '1', value: 1})
  }
  if (page.start > 2) {
    result.push({label: skip, value: 0})
  }
  for (let i = page.start; i <= page.end; i += 1) {
    result.push({label: `${i}`, value: i})
  }
  if (page.end < total - 1) {
    result.push({label: skip, value: 0})
  }
  if (page.end < total) {
    result.push({label: `${total}`, value: total})
  }
  return result
}

export function hasPaginationChildren(
  item: any
): item is PaginationChildrenProps {
  return item.children
}

export function hasPaginationTitle(item: any): item is PaginationTitleProps {
  return item.title
}
