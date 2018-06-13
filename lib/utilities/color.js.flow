/* @flow */
import classnames from 'classnames'

export type ColorParameters = {
  primary?: boolean,
  secondary?: boolean,
  gray?: boolean,
  light?: boolean,
  success?: boolean,
  warning?: boolean,
  error?: boolean,
}

function text(
  {primary, secondary, gray, light, success, warning, error}: ColorParameters,
  className: string = ''
): string {
  return classnames(
    {
      'text-primary': primary,
      'text-secondary': secondary,
      'text-gray': gray,
      'text-light': light,
      'text-success': success,
      'text-warning': warning,
      'text-error': error,
    },
    className
  )
}

function background(
  {primary, secondary, gray, light, success, warning, error}: ColorParameters,
  className: string = ''
): string {
  return classnames(
    {
      'bg-primary': primary,
      'bg-secondary': secondary,
      'bg-gray': gray,
      'bg-light': light,
      'bg-success': success,
      'bg-warning': warning,
      'bg-error': error,
    },
    className
  )
}

export {text, background}
