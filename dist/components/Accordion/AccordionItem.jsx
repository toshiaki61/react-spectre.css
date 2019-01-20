import React from 'react';
import cx from 'classnames';
import { Icon } from '@elements/Icon';
import { attr } from '@utils/attr';
import AccordionBody from './AccordionBody';
var AccordionItem = function (p) {
    var id = p.id, header = p.header, className = p.className, exclusive = p.exclusive, useIcon = p.useIcon;
    var type = exclusive ? 'radio' : 'checkbox';
    var inputProps = { id: id, type: type, name: "accordion-" + type };
    var icon = useIcon ? (<Icon {...attr({ marginRight: true })} type="arrow-right"/>) : null;
    return (<div className={cx('accordion-item', className)}>
      <input {...inputProps} id={id} hidden/>
      <label className="accordion-header" htmlFor={id}>
        {icon}
        {header}
      </label>
      <div className="accordion-body">
        <AccordionBody {...p}/>
      </div>
    </div>);
};
AccordionItem.defaultProps = {
    className: '',
    exclusive: false,
    useIcon: false,
};
export default AccordionItem;
//# sourceMappingURL=AccordionItem.jsx.map