import cx from 'classnames'

import {BaseProps} from './interfaces'

export function attr({
  className,
  style,

  fg,
  bg,

  cursor,
  display,
  visibility,
  textHide,
  textAssistive,

  floatClearing,
  floating,
  position,
  blockCentering,

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

  shape,

  textAlign,
  textCase,
  textWeight,
  textDecoration,
  textSize,
  textOverflow,

  lang,

  loading,
  loadingSize,

  divider,
  dividerVertical,
  dividerContent,

  tooltip,
  tooltipPosition,

  badge,
}: Partial<BaseProps>) {
  const cn = cx(className, {
    [`text-${fg}`]: fg,
    [`bg-${bg}`]: bg,

    [`c-${cursor}`]: cursor,
    [`d-${display}`]: display,
    [`d-${visibility}`]: visibility,

    [`text-${textHide}`]: textHide,
    [`text-${textAssistive}`]: textAssistive,

    [`${floatClearing}`]: floatClearing,
    [`float-${floating}`]: floating,

    [`p-${position}`]: position,
    [`p-${blockCentering}`]: blockCentering,

    [`s-${shape}`]: shape,

    [`text-${textAlign}`]: textAlign,
    [`text-${textCase}`]: textCase,
    [`text-${textWeight}`]: textWeight,
    [`text-${textDecoration}`]: textDecoration,
    [`text-${textSize}`]: textSize,
    [`text-${textOverflow}`]: textOverflow,

    [`lang-${lang}`]: lang,

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

    loading,
    [`loading-${loadingSize}`]: loadingSize,

    divider: divider && !dividerVertical,
    'divider-vert': dividerVertical,

    tooltip,
    [`tooltip-${tooltipPosition}`]: tooltipPosition,

    badge,
  })
  const result: Partial<BaseProps> = {}
  if (cn) {
    result.className = cn
  }
  if (style) {
    result.style = style
  }
  if (dividerContent) {
    result['data-content'] = dividerContent
  }
  if (tooltip) {
    result['data-tooltip'] = tooltip
  }
  if (badge) {
    result['data-badge'] = badge
  }
  return result
}
