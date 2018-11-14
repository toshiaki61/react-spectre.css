import classnames from 'classnames'

interface IShapeParameters {
  rounded?: boolean
  circle?: boolean
}
export default function shape(
  {rounded, circle}: IShapeParameters,
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
