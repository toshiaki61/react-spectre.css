import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export type ColumnProps = {
  children: React.DOM,
  className?: string,
  xs?: number,
  sm?: number,
  md?: number,
  lg?: number,
  xl?: number,
  size?: number,
}
const Column = ({
  children,
  className,
  xs,
  sm,
  md,
  lg,
  xl,
  size,
  ...props
}: ColumnProps): React.Element<*> => {
  const classes = classnames(
    'column',
    {
      [`col-xs-${xs || 0}`]: !!xs,
      [`col-sm-${sm || 0}`]: !!sm,
      [`col-md-${md || 0}`]: !!md,
      [`col-lg-${lg || 0}`]: !!lg,
      [`col-xl-${xl || 0}`]: !!xl,
      [`col-${size || 0}`]: !!size,
    },
    className
  )

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}
Column.defaultProps = {
  className: '',
  xs: 0,
  sm: 0,
  md: 0,
  lg: 0,
  xl: 0,
  size: 0,
}

export default Column

export const ColumnClassnames = [
  'Column12',
  'Column11',
  'Column10',
  'Column9',
  'Column8',
  'Column7',
  'Column6',
  'Column5',
  'Column4',
  'Column3',
  'Column2',
  'Column1',
  'Column',
]

export const {
  Column12,
  Column11,
  Column10,
  Column9,
  Column8,
  Column7,
  Column6,
  Column5,
  Column4,
  Column3,
  Column2,
  Column1,
} = (() => {
  const toExport = {}
  for (let i = 12; i > 0; i -= 1) {
    const func = ({children, ...props}) => (
      <Column size={i} {...props}>
        {children}
      </Column>
    )
    func.propTypes = {children: PropTypes.node}
    func.defaultProps = {children: null}
    func.funcName = `Column${i}`
    toExport[`Column${i}`] = func
  }
  return toExport
})()
