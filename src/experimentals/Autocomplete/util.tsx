import * as React from 'react'

import {SuggestProps, SuggestValues} from './interfaces'

export const delimiter: string = '______'

export function mark(
  target: string,
  search: string
): React.ReactNode | React.ReactNodeArray {
  if (!search) {
    return target
  }
  const regex: RegExp = new RegExp(`(${search})`, 'ig')
  return target
    .replace(regex, `${delimiter}$1${delimiter}`)
    .replace(new RegExp(`^${delimiter}|${delimiter}$`, 'g'), '')
    .split(delimiter)
    .filter((row: string) => row !== '')
    .map((row: string, i: number) => {
      if (regex.test(row)) {
        const key: string = `mark-${i}`
        return <mark key={key}>{row}</mark>
      }
      return row
    })
}
export function filter(
  word: string,
  key: keyof SuggestProps
): (v: SuggestProps) => boolean {
  const regex = new RegExp(word, 'ig')
  return function search(value: Partial<SuggestValues>) {
    if (word === '') {
      return true
    }
    return regex.test(value[key] || '')
  }
}
