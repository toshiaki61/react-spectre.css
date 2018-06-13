
import classnames from 'classnames';






































export default function position(_ref)






































{var clearfix = _ref.clearfix,floatLeft = _ref.floatLeft,floatRight = _ref.floatRight,relative = _ref.relative,absolute = _ref.absolute,fixed = _ref.fixed,centered = _ref.centered,margin = _ref.margin,marginMore = _ref.marginMore,marginTop = _ref.marginTop,marginTopMore = _ref.marginTopMore,marginBottom = _ref.marginBottom,marginBottomMore = _ref.marginBottomMore,marginLeft = _ref.marginLeft,marginLeftMore = _ref.marginLeftMore,marginRight = _ref.marginRight,marginRightMore = _ref.marginRightMore,marginWidth = _ref.marginWidth,marginWidthMore = _ref.marginWidthMore,marginHeight = _ref.marginHeight,marginHeightMore = _ref.marginHeightMore,padding = _ref.padding,paddingMore = _ref.paddingMore,paddingTop = _ref.paddingTop,paddingTopMore = _ref.paddingTopMore,paddingBottom = _ref.paddingBottom,paddingBottomMore = _ref.paddingBottomMore,paddingLeft = _ref.paddingLeft,paddingLeftMore = _ref.paddingLeftMore,paddingRight = _ref.paddingRight,paddingRightMore = _ref.paddingRightMore,paddingWidth = _ref.paddingWidth,paddingWidthMore = _ref.paddingWidthMore,paddingHeight = _ref.paddingHeight,paddingHeightMore = _ref.paddingHeightMore;var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return classnames(
  {
    clearfix: clearfix,
    'float-left': floatLeft,
    'float-right': floatRight,
    relative: relative,
    absolute: absolute,
    fixed: fixed,
    centered: centered,
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
    'py-2': paddingHeightMore },

  className);

}