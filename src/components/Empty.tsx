import classnames from 'classnames'
import React, {ReactElement, ReactNode} from 'react'
import Icon from '../elements/Icon'

export interface ITitleProps {
  children: ReactNode
  className?: string
}
const Title = ({
  children,
  className,
  ...props
}: ITitleProps): ReactElement<ITitleProps> => {
  const classes = classnames('empty-title', 'h5', className)
  return (
    <p className={classes} {...props}>
      {children}
    </p>
  )
}
Title.defaultProps = {
  className: '',
}
export interface ISubtitleProps {
  children?: ReactNode
  className?: string
}
const Subtitle = ({
  children,
  className,
  ...props
}: ISubtitleProps): ReactElement<ISubtitleProps> => {
  const classes = classnames('empty-subtitle', className)
  return (
    <p className={classes} {...props}>
      {children}
    </p>
  )
}
Subtitle.defaultProps = {
  children: null,
  className: '',
}
interface IActionProps {
  children?: ReactNode
}
const Action = ({children}: IActionProps) => (
  <div className="empty-action">{children}</div>
)
export interface IEmptyProps {
  children?: ReactElement<any>
  className?: string
  icon?: string
  title?: string
  subtitle?: string
  action?: ReactNode
}
const Empty = ({
  children,
  className,
  icon,
  title,
  subtitle,
  action,
  ...props
}: IEmptyProps): ReactElement<IEmptyProps> => {
  const classes = classnames('empty', className)
  return (
    <div className={classes} {...props}>
      {icon ? (
        <div className="empty-icon">
          <Icon className={`icon-${icon} icon-3x`} />
        </div>
      ) : null}
      {title ? <Title>{title}</Title> : null}
      {subtitle ? <Subtitle>{subtitle}</Subtitle> : null}
      {action ? {action} : null}
      {children}
    </div>
  )
}
Empty.defaultProps = {
  children: null,
  className: '',
  icon: '',
  title: null,
  subtitle: null,
}
Empty.Title = Title
Empty.Subtitle = Subtitle
Empty.Action = Action
export default Empty
