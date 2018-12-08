import classnames from 'classnames'
import React, {
  CSSProperties,
  ReactElement,
  ReactNode,
  ReactNodeArray,
} from 'react'
import Container from './Container'

interface IColumnsVisualProps {
  gapless?: boolean
  oneline?: boolean
  style?: CSSProperties
  className?: string
}
export interface IColumnsWithoutContainerProps extends IColumnsVisualProps {
  children: ReactNode | ReactNodeArray
  className?: string
}
const ColumnsWithoutContainer = ({
  children,
  gapless,
  oneline,
  className,
  ...props
}: IColumnsWithoutContainerProps): ReactElement<
  IColumnsWithoutContainerProps
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

export function acquireContainerProps(option: boolean | string | object) {
  switch (typeof option) {
    case 'boolean':
      return null
    case 'string':
      return {[option]: true}
    default:
      return option
  }
}
export interface IContainerProps {
  className?: string
  xs?: boolean
  sm?: boolean
  md?: boolean
  lg?: boolean
  xl?: boolean
}
export interface IColumnsProps extends IColumnsVisualProps {
  children: ReactNode | ReactNodeArray
  container?: boolean | string | IContainerProps
}
const Columns = ({
  children,
  container,
  ...props
}: IColumnsProps): ReactElement<IColumnsProps> => {
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
