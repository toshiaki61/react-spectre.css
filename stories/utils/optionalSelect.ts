import {select, SelectValue} from '@storybook/addon-knobs'

export function optionalSelect<T extends SelectValue>(
  name: string,
  options: {[s: string]: T},
  value: T,
  groupId?: string
): Exclude<T, ''> | undefined {
  const result = select(name, options, value, groupId)
  if (result === '') {
    return undefined
  }
  return result as Exclude<T, ''>
}
