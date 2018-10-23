import React, {ReactElement} from 'react'
import classnames from 'classnames'
import Container from './Container'

export interface ColumnsWithoutContainerProps {
  children: ReactElement<any> | ReactElement<any>[]
  className?: string
  gapless?: boolean
  oneline?: boolean
}
const ColumnsWithoutContainer = ({
  children,
  gapless,
  oneline,
  className,
  ...props
}: ColumnsWithoutContainerProps): ReactElement<
  ColumnsWithoutContainerProps
> => {
  const classes = classnames(
    'columns',
    {
      'col-gapless': gapless,
      'col-oneline': oneline,
    },
    className
  )
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}
ColumnsWithoutContainer.defaultProps = {
  className: '',
  gapless: false,
  oneline: false,
}
export function acquireContainerProps(option) {
  switch (typeof option) {
    case 'boolean':
      return null
    case 'string':
      return {[option]: true}
    default:
      return option
  }
}
export interface ContainerProps {
  className?: string
  xs?: boolean
  sm?: boolean
  md?: boolean
  lg?: boolean
  xl?: boolean
}
export interface ColumnsProps {
  children: ReactElement<any> | ReactElement<any>[]
  container?: boolean | string | ContainerProps
}
const Columns = ({
  children,
  container,
  ...props
}: ColumnsProps): ReactElement<ColumnsProps> => {
  const content = (
    <ColumnsWithoutContainer {...props}>{children}</ColumnsWithoutContainer>
  )
  if (!container) {
    return content
  }
  const containerProps = acquireContainerProps(container)
  return <Container {...containerProps}>{content}</Container>
}
Columns.defaultProps = {
  container: false,
}
export default Columns
