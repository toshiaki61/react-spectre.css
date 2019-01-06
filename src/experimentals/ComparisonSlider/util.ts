import {ComparisonSliderChildrenProps} from './interfaces'

export function hasComparisonSliderChildren(
  item: any
): item is ComparisonSliderChildrenProps {
  return item.children
}
