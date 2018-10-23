// @flow
import React, {ReactElement} from 'react'
import classnames from 'classnames'
import Icon from '../elements/Icon'

export interface SidebarProps {
  className?: string
  content: Array<ReactElement<any>> | ReactElement<any> | string
}
export interface OffCanvasProps {
  children: Array<ReactElement<any>> | ReactElement<any>
  sidebar: SidebarProps
}
const OffCanvas = ({
  children,
  sidebar,
  ...props
}: OffCanvasProps): ReactElement<OffCanvasProps> => (
  <div className="off-canvas off-canvas-sidebar-show" {...props}>
    <a
      className="off-canvas-toggle btn btn-primary btn-action"
      href="#sidebar-id"
    >
      <Icon menu />
    </a>
    <div
      id="sidebar-id"
      className={classnames('off-canvas-sidebar', sidebar.className || '')}
    >
      {sidebar.content}
    </div>
    <a className="off-canvas-overlay" href="#close">
      close
    </a>
    <div className="off-canvas-content">{children}</div>
  </div>
)
export default OffCanvas
