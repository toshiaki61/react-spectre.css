import classnames from 'classnames';
export default function display(_a, className) {
    var block = _a.block, inline = _a.inline, inlineBlock = _a.inlineBlock, flex = _a.flex, inlineFlex = _a.inlineFlex, none = _a.none, hide = _a.hide, visible = _a.visible, invisible = _a.invisible, textHide = _a.textHide, assistive = _a.assistive;
    return classnames({
        'd-block': block,
        'd-inline': inline,
        'd-inline-block': inlineBlock,
        'd-flex': flex,
        'd-inline-flex': inlineFlex,
        'd-none': none,
        'd-hide': hide,
        'd-visible': visible,
        'd-invisible': invisible,
        'text-hide': textHide,
        'text-assistive': assistive,
    }, className);
}
//# sourceMappingURL=display.js.map