import * as tslib_1 from "tslib";
import React from 'react';
import cx from 'classnames';
import AccordionItem from './AccordionItem';
import { hasAccordionChildren } from './util';
function renderAccordion(p) {
    if (hasAccordionChildren(p)) {
        return p.children;
    }
    return p.menus.map(function (_a, i) {
        var header = _a.header, contents = _a.contents, menu = tslib_1.__rest(_a, ["header", "contents"]);
        var key = "accordion_" + i;
        return (<AccordionItem key={key} header={header} contents={contents} {...menu}/>);
    });
}
var Accordion = function (p) { return (<div className={cx('accordion', p.className)}>{renderAccordion(p)}</div>); };
export default Accordion;
//# sourceMappingURL=Accordion.jsx.map