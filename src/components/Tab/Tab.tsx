import React, {Fragment, ReactElement, useCallback} from 'react'

import cx from 'classnames'

import {TabProps} from './interfaces'

import TabAction from './TabAction'
import TabItem from './TabItem'

const Tab = ({
  children,
  items,
  activeId,
  onClick,
  action,
  block,
}: TabProps): ReactElement<TabProps> => {
  return (
    <ul className={cx('tab', {'tab-block': block})}>
      {children ? (
        children
      ) : (
        <Fragment>
          {items &&
            items.map(item => {
              const handleLinkClick = useCallback(e => onClick(e, item.id), [
                item.id,
              ])
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
      )}
    </ul>
  )
}
Tab.defaultProps = {
  active: '',
}
export default Tab
