import classnames from 'classnames'

export interface IColorParameters {
  primary?: boolean
  secondary?: boolean
  dark?: boolean
  gray?: boolean
  light?: boolean
  success?: boolean
  warning?: boolean
  error?: boolean
}

function text(
  {
    primary,
    secondary,
    dark,
    gray,
    light,
    success,
    warning,
    error,
  }: IColorParameters,
  className: string = ''
): string {
  return classnames(
    {
      'text-primary': primary,
      'text-secondary': secondary,
      'text-dark': dark,
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
  {
    primary,
    secondary,
    dark,
    gray,
    light,
    success,
    warning,
    error,
  }: IColorParameters,
  className: string = ''
): string {
  return classnames(
    {
      'bg-primary': primary,
      'bg-secondary': secondary,
      'bg-dark': dark,
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