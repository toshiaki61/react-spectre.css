import classnames from 'classnames'
import React, {ReactElement} from 'react'
import Icon from '../elements/Icon'

export interface ISidebarProps {
  className?: string
  content: Array<ReactElement<any>> | ReactElement<any> | string
}
export interface IOffCanvasProps {
  children: Array<ReactElement<any>> | ReactElement<any>
  sidebar: ISidebarProps
}
const OffCanvas = ({
  children,
  sidebar,
  ...props
}: IOffCanvasProps): ReactElement<IOffCanvasProps> => (
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
