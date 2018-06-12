/* @flow */
import classnames from 'classnames'

type TextParameters = {
  left?: boolean,
  center?: boolean,
  right?: boolean,
  justify?: boolean,
  lowercase?: boolean,
  uppercase?: boolean,
  capitalize?: boolean,
  normal?: boolean,
  bold?: boolean,
  italic?: boolean,
  large?: boolean,
  ellipsis?: boolean,
  clip?: boolean,
  textBreak?: boolean,
}

export default function text(
  {
    left,
    center,
    right,
    justify,
    lowercase,
    uppercase,
    capitalize,
    normal,
    bold,
    italic,
    large,
    ellipsis,
    clip,
    textBreak,
  }: TextParameters,
  className: string
): string {
  return classnames(
    {
      'text-left': left,
      'text-center': center,
      'text-right': right,
      'text-justify': justify,
      'text-lowercase': lowercase,
      'text-uppercase': uppercase,
      'text-capitalize': capitalize,
      'text-normal': normal,
      'text-bold': bold,
      'text-italic': italic,
      'text-large': large,
      'text-ellipsis': ellipsis,
      'text-clip': clip,
      'text-break': textBreak,
    },
    className
  )
}
