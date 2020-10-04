import { select } from '@storybook/addon-knobs'
import { SelectTypeKnobValue } from '@storybook/addon-knobs/dist/components/types'

export function optionalSelect<T extends SelectTypeKnobValue = SelectTypeKnobValue>(
  name: string,
  options: {[s: string]: T},
  value: T,
  groupId?: string
): Exclude<T, ''> | undefined {
  const result = select<T>(name, options, value, groupId)
  if (!result) {
    return undefined
  }
  return result as Exclude<T, ''>
}
