import React, {FC, Fragment, MouseEvent, useCallback} from 'react'

import cx from 'classnames'

import {TabProps} from './interfaces'
import {hasTabChildren} from './util'

import TabAction from './TabAction'
import TabItem from './TabItem'

function renderTab(p: TabProps) {
  if (hasTabChildren(p)) {
    return p.children
  }
  const {items, activeId, onClick, action} = p
  return (
    <Fragment>
      {items.map(item => {
        const handleLinkClick =
          // useCallback(
          (e: MouseEvent<any>) => {
            e.preventDefault()
            onClick(e, item.id)
          }
        // , [item.id])
        return (
          <TabItem
            key={item.id}
            {...item}
            onClick={handleLinkClick}
            active={activeId === item.id}
          />
        )
      })}
      {action ? <TabAction>{action}</TabAction> : null}
    </Fragment>
  )
}
const Tab: FC<TabProps> = p => (
  <ul className={cx('tab', {'tab-block': p.block})}>{renderTab(p)}</ul>
)

export default Tab
