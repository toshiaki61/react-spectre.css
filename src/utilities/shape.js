/* @flow */
import classnames from 'classnames'

type ShapeParameters = {
  rounded?: boolean,
  circle?: boolean,
}
export default function shape(
  {rounded, circle}: ShapeParameters,
  className: string = ''
): string {
  return classnames(
    {
      's-rounded': rounded,
      's-circle': circle,
    },
    className
  )
}
