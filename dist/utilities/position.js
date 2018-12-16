import classnames from 'classnames';
export default function position(_a, className) {
    var clearfix = _a.clearfix, floatLeft = _a.floatLeft, floatRight = _a.floatRight, relative = _a.relative, absolute = _a.absolute, fixed = _a.fixed, centered = _a.centered, margin = _a.margin, marginMore = _a.marginMore, marginTop = _a.marginTop, marginTopMore = _a.marginTopMore, marginBottom = _a.marginBottom, marginBottomMore = _a.marginBottomMore, marginLeft = _a.marginLeft, marginLeftMore = _a.marginLeftMore, marginRight = _a.marginRight, marginRightMore = _a.marginRightMore, marginWidth = _a.marginWidth, marginWidthMore = _a.marginWidthMore, marginHeight = _a.marginHeight, marginHeightMore = _a.marginHeightMore, padding = _a.padding, paddingMore = _a.paddingMore, paddingTop = _a.paddingTop, paddingTopMore = _a.paddingTopMore, paddingBottom = _a.paddingBottom, paddingBottomMore = _a.paddingBottomMore, paddingLeft = _a.paddingLeft, paddingLeftMore = _a.paddingLeftMore, paddingRight = _a.paddingRight, paddingRightMore = _a.paddingRightMore, paddingWidth = _a.paddingWidth, paddingWidthMore = _a.paddingWidthMore, paddingHeight = _a.paddingHeight, paddingHeightMore = _a.paddingHeightMore;
    if (className === void 0) { className = ''; }
    return classnames({
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
        'py-2': paddingHeightMore,
    }, className);
}
//# sourceMappingURL=position.js.map