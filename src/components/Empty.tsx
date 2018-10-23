import React, {ReactElement} from 'react'
import classnames from 'classnames'
import Icon from '../elements/Icon'

export interface TitleProps {
  children: ReactElement<any> | string
  className?: string
}
const Title = ({
  children,
  className,
  ...props
}: TitleProps): ReactElement<TitleProps> => {
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
export interface SubtitleProps {
  children?: ReactElement<any> | string
  className?: string
}
const Subtitle = ({
  children,
  className,
  ...props
}: SubtitleProps): ReactElement<SubtitleProps> => {
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
export interface EmptyProps {
  children?: ReactElement<any>
  className?: string
  icon?: string
  title?: string
  subtitle?: string
}
const Empty = ({
  children,
  className,
  icon,
  title,
  subtitle,
  ...props
}: EmptyProps): ReactElement<EmptyProps> => {
  const classes = classnames('empty', className)
  return (
    <div className={classes} {...props}>
      {icon ? (
        <Icon className={`icon-${icon}`} style={{fontSize: '4rem'}} />
      ) : null}
      {title ? <Title>{title}</Title> : null}
      {subtitle ? <Subtitle>{subtitle}</Subtitle> : null}
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
export default Empty
