// @flow
import * as React from 'react'
import classnames from 'classnames'

import Icon from '../elements/Icon'

export type SidebarProps = {
  className?: string,
  content: Array<React.DOM> | React.DOM | string,
}
export type OffCanvasProps = {
  children: Array<React.DOM> | React.DOM,
  sidebar: SidebarProps,
}

const OffCanvas = ({
  children,
  sidebar,
  ...props
}: OffCanvasProps): React.Element<*> => (
  <div className="off-canvas" {...props}>
    <input
      type="checkbox"
      className="off-canvas-checkbox"
      id="sidebar-checkbox"
      name="sidebar-checkbox"
      hidden
    />
    <label
      className="off-canvas-toggle btn btn-primary btn-lg"
      htmlFor="sidebar-checkbox"
    >
      <Icon menu />
    </label>

    <div className={classnames('off-canvas-sidebar', sidebar.className || '')}>
      {sidebar.content}
    </div>
    <div className="off-canvas-content">{children}</div>
  </div>
)

export default OffCanvas
