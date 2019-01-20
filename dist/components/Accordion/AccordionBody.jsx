import React from 'react';
import { Menu } from '@components/Menu';
import { hasAccordionItemChildren } from './util';
var AccordionBody = function (p) {
    if (hasAccordionItemChildren(p)) {
        return p.children;
    }
    return <Menu nav contents={p.contents}/>;
};
export default AccordionBody;
//# sourceMappingURL=AccordionBody.jsx.map