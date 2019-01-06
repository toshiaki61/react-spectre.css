import {StepChildrenProps} from './interfaces'

export function hasStepChildren(item: any): item is StepChildrenProps {
  return item.children
}
