import cx from 'classnames';
export function attr(_a) {
    var className = _a.className, style = _a.style, fg = _a.fg, bg = _a.bg, cursor = _a.cursor, display = _a.display, visibility = _a.visibility, textHide = _a.textHide, textAssistive = _a.textAssistive, floatClearing = _a.floatClearing, floating = _a.floating, position = _a.position, blockCentering = _a.blockCentering, margin = _a.margin, marginMore = _a.marginMore, marginTop = _a.marginTop, marginTopMore = _a.marginTopMore, marginBottom = _a.marginBottom, marginBottomMore = _a.marginBottomMore, marginLeft = _a.marginLeft, marginLeftMore = _a.marginLeftMore, marginRight = _a.marginRight, marginRightMore = _a.marginRightMore, marginWidth = _a.marginWidth, marginWidthMore = _a.marginWidthMore, marginHeight = _a.marginHeight, marginHeightMore = _a.marginHeightMore, padding = _a.padding, paddingMore = _a.paddingMore, paddingTop = _a.paddingTop, paddingTopMore = _a.paddingTopMore, paddingBottom = _a.paddingBottom, paddingBottomMore = _a.paddingBottomMore, paddingLeft = _a.paddingLeft, paddingLeftMore = _a.paddingLeftMore, paddingRight = _a.paddingRight, paddingRightMore = _a.paddingRightMore, paddingWidth = _a.paddingWidth, paddingWidthMore = _a.paddingWidthMore, paddingHeight = _a.paddingHeight, paddingHeightMore = _a.paddingHeightMore, shape = _a.shape, textAlign = _a.textAlign, textCase = _a.textCase, textWeight = _a.textWeight, textDecoration = _a.textDecoration, textSize = _a.textSize, textOverflow = _a.textOverflow, lang = _a.lang, loading = _a.loading, loadingSize = _a.loadingSize, divider = _a.divider, dividerVertical = _a.dividerVertical, dividerContent = _a.dividerContent, tooltip = _a.tooltip, tooltipPosition = _a.tooltipPosition, badge = _a.badge;
    var _b;
    var cn = cx(className, (_b = {},
        _b["text-" + fg] = fg,
        _b["bg-" + bg] = bg,
        _b["c-" + cursor] = cursor,
        _b["d-" + display] = display,
        _b["d-" + visibility] = visibility,
        _b["text-" + textHide] = textHide,
        _b["text-" + textAssistive] = textAssistive,
        _b["" + floatClearing] = floatClearing,
        _b["float-" + floating] = floating,
        _b["p-" + position] = position,
        _b["p-" + blockCentering] = blockCentering,
        _b["s-" + shape] = shape,
        _b["text-" + textAlign] = textAlign,
        _b["text-" + textCase] = textCase,
        _b["text-" + textWeight] = textWeight,
        _b["text-" + textDecoration] = textDecoration,
        _b["text-" + textSize] = textSize,
        _b["text-" + textOverflow] = textOverflow,
        _b["lang-" + lang] = lang,
        _b['m-1'] = margin,
        _b['m-2'] = marginMore,
        _b['mt-1'] = marginTop,
        _b['mt-2'] = marginTopMore,
        _b['mb-1'] = marginBottom,
        _b['mb-2'] = marginBottomMore,
        _b['ml-1'] = marginLeft,
        _b['ml-2'] = marginLeftMore,
        _b['mr-1'] = marginRight,
        _b['mr-2'] = marginRightMore,
        _b['mx-1'] = marginWidth,
        _b['mx-2'] = marginWidthMore,
        _b['my-1'] = marginHeight,
        _b['my-2'] = marginHeightMore,
        _b['p-1'] = padding,
        _b['p-2'] = paddingMore,
        _b['pt-1'] = paddingTop,
        _b['pt-2'] = paddingTopMore,
        _b['pb-1'] = paddingBottom,
        _b['pb-2'] = paddingBottomMore,
        _b['pl-1'] = paddingLeft,
        _b['pl-2'] = paddingLeftMore,
        _b['pr-1'] = paddingRight,
        _b['pr-2'] = paddingRightMore,
        _b['px-1'] = paddingWidth,
        _b['px-2'] = paddingWidthMore,
        _b['py-1'] = paddingHeight,
        _b['py-2'] = paddingHeightMore,
        _b.loading = loading,
        _b["loading-" + loadingSize] = loadingSize,
        _b.divider = divider && !dividerVertical,
        _b['divider-vert'] = dividerVertical,
        _b.tooltip = tooltip,
        _b["tooltip-" + tooltipPosition] = tooltipPosition,
        _b.badge = badge,
        _b));
    var result = {};
    if (cn) {
        result.className = cn;
    }
    if (style) {
        result.style = style;
    }
    if (dividerContent) {
        result['data-content'] = dividerContent;
    }
    if (tooltip) {
        result['data-tooltip'] = tooltip;
    }
    if (badge) {
        result['data-badge'] = badge;
    }
    return result;
}
//# sourceMappingURL=attr.js.map