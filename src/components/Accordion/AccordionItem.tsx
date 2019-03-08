import React, {FC} from 'react'

import cx from 'classnames'

import {Icon} from 'elements/Icon'
import {attr} from 'utilities/attr'

import {AccordionItemProps} from './interfaces'

import AccordionBody from './AccordionBody'

const AccordionItem: FC<AccordionItemProps> = p => {
  const {id, header, className, exclusive, useIcon} = p
  const type = exclusive ? 'radio' : 'checkbox'
  const inputProps = {id, type, name: `accordion-${type}`}
  const icon = useIcon ? (
    <Icon {...attr({marginRight: true})} type="arrow-right" />
  ) : null
  return (
    <div className={cx('accordion-item', className)}>
      <input {...inputProps} id={id} hidden />
      <label className="accordion-header" htmlFor={id}>
        {icon}
        {header}
      </label>
      <div className="accordion-body">
        <AccordionBody {...p} />
      </div>
    </div>
  )
}
AccordionItem.defaultProps = {
  className: '',
  exclusive: false,
  useIcon: false,
}

export default AccordionItem
