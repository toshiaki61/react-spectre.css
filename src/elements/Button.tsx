import classnames from 'classnames'
import React, {MouseEventHandler, ReactNode, ReactNodeArray} from 'react'

export interface IButtonProps {
  children?: ReactNode
  className?: string
  loading?: boolean
  href?: string
  lg?: boolean
  sm?: boolean
  block?: boolean
  inputGroup?: boolean
  primary?: boolean
  clear?: boolean
  link?: boolean
  action?: boolean
  circle?: boolean
  onClick?: MouseEventHandler<Button>
  tabIndex?: number
  disabled?: boolean
}
const Button = ({
  children,
  className,
  loading,
  href,
  lg,
  sm,
  block,
  inputGroup,
  primary,
  clear,
  link,
  action,
  circle,
  ...props
}: IButtonProps) => {
  const linkButton = link || href
  const classes = classnames(
    'btn',
    {
      loading,
      'btn-lg': lg,
      'btn-sm': sm,
      'btn-block': block,
      'input-group-btn': inputGroup,
      'btn-primary': primary,
      'btn-clear': clear,
      'btn-link': linkButton && !primary,
      'btn-action': action,
      circle,
    },
    className
  )
  let toReturn = null
  if (href) {
    toReturn = (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  } else {
    toReturn = (
      <button className={classes} {...props}>
        {children}
      </button>
    )
  }
  return toReturn
}
export interface IGroupProps {
  children: ReactNodeArray
  className?: string
  block?: boolean
}
const Group = ({children, className, block}: IGroupProps) => {
  const classes = classnames('btn-group', {'btn-group-block': block}, className)
  return <div className={classes}>{children}</div>
}
Group.defaultProps = {
  className: '',
  block: false,
}
Button.Group = Group
export default Button
