import classnames from 'classnames'

interface PositionParameters {
  clearfix?: boolean
  floatLeft?: boolean
  floatRight?: boolean
  relative?: boolean
  absolute?: boolean
  fixed?: boolean
  centered?: boolean
  margin?: boolean
  marginMore?: boolean
  marginTop?: boolean
  marginTopMore?: boolean
  marginBottom?: boolean
  marginBottomMore?: boolean
  marginLeft?: boolean
  marginLeftMore?: boolean
  marginRight?: boolean
  marginRightMore?: boolean
  marginWidth?: boolean
  marginWidthMore?: boolean
  marginHeight?: boolean
  marginHeightMore?: boolean
  padding?: boolean
  paddingMore?: boolean
  paddingTop?: boolean
  paddingTopMore?: boolean
  paddingBottom?: boolean
  paddingBottomMore?: boolean
  paddingLeft?: boolean
  paddingLeftMore?: boolean
  paddingRight?: boolean
  paddingRightMore?: boolean
  paddingWidth?: boolean
  paddingWidthMore?: boolean
  paddingHeight?: boolean
  paddingHeightMore?: boolean
}
export default function position(
  {
    clearfix,
    floatLeft,
    floatRight,
    relative,
    absolute,
    fixed,
    centered,
    margin,
    marginMore,
    marginTop,
    marginTopMore,
    marginBottom,
    marginBottomMore,
    marginLeft,
    marginLeftMore,
    marginRight,
    marginRightMore,
    marginWidth,
    marginWidthMore,
    marginHeight,
    marginHeightMore,
    padding,
    paddingMore,
    paddingTop,
    paddingTopMore,
    paddingBottom,
    paddingBottomMore,
    paddingLeft,
    paddingLeftMore,
    paddingRight,
    paddingRightMore,
    paddingWidth,
    paddingWidthMore,
    paddingHeight,
    paddingHeightMore,
  }: PositionParameters,
  className: string = ''
): string {
  return classnames(
    {
      clearfix,
      'float-left': floatLeft,
      'float-right': floatRight,
      relative,
      absolute,
      fixed,
      centered,
      'm-1': margin,
      'm-2': marginMore,
      'mt-1': marginTop,
      'mt-2': marginTopMore,
      'mb-1': marginBottom,
      'mb-2': marginBottomMore,
      'ml-1': marginLeft,
      'ml-2': marginLeftMore,
      'mr-1': marginRight,
      'mr-2': marginRightMore,
      'mx-1': marginWidth,
      'mx-2': marginWidthMore,
      'my-1': marginHeight,
      'my-2': marginHeightMore,
      'p-1': padding,
      'p-2': paddingMore,
      'pt-1': paddingTop,
      'pt-2': paddingTopMore,
      'pb-1': paddingBottom,
      'pb-2': paddingBottomMore,
      'pl-1': paddingLeft,
      'pl-2': paddingLeftMore,
      'pr-1': paddingRight,
      'pr-2': paddingRightMore,
      'px-1': paddingWidth,
      'px-2': paddingWidthMore,
      'py-1': paddingHeight,
      'py-2': paddingHeightMore,
    },
    className
  )
}
