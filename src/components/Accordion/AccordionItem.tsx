import React, {ReactElement} from 'react'

import cx from 'classnames'

import {Menu} from '@components/Menu'
import uniqueId from '@elements/form/uniqueId'
import {Icon} from '@elements/Icon'
import {attr} from '@utils/attr'

import {AccordionItemProps} from './interfaces'

const AccordionItem = ({
  contents,
  className,
  exclusive,
  useIcon,
  header,
  children,
}: AccordionItemProps): ReactElement<AccordionItemProps> => {
  const classes = cx('accordion-item', className)
  const id = uniqueId('accordion-item')
  const type = exclusive ? 'radio' : 'checkbox'
  const inputProps = {id, type, name: `accordion-${type}`}
  const icon = useIcon ? (
    <Icon {...attr({marginRight: true})} type="arrow-right" />
  ) : null
  return (
    <div className={classes}>
      <input {...inputProps} id={id} hidden />
      <label className="accordion-header" htmlFor={id}>
        {icon}
        {header}
      </label>
      <div className="accordion-body">
        {children ? children : contents && <Menu nav contents={contents} />}
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
