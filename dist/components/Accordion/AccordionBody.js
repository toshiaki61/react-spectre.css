import React from 'react';
import { Menu } from '@components/Menu';
import { hasAccordionItemChildren } from './util';
var AccordionBody = function (p) {
    if (hasAccordionItemChildren(p)) {
        return p.children;
    }
    return React.createElement(Menu, { nav: true, contents: p.contents });
};
export default AccordionBody;
//# sourceMappingURL=AccordionBody.js.map