import classnames from 'classnames'

interface ShapeParameters {
  rounded?: boolean
  circle?: boolean
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
