import * as React from 'react'

import cx from 'clsx'

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
    <React.Fragment>
      {items.map(item => {
        const handleLinkClick =
          // useCallback(
          (e: React.MouseEvent<any>) => {
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
    </React.Fragment>
  )
}
const Tab: React.FC<TabProps> = p => (
  <ul className={cx('tab', {'tab-block': p.block})}>{renderTab(p)}</ul>
)

export default Tab
