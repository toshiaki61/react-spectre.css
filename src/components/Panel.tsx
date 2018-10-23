import React, {ReactElement} from 'react'
import classnames from 'classnames'

export interface PanelProps {
  header?: ReactElement<any>
  nav?: ReactElement<any>
  content?: ReactElement<any> | string
  footer?: ReactElement<any> | string
  headerClass?: string
}

const Panel = ({
  header,
  nav,
  content,
  footer,
  headerClass,
}: PanelProps): ReactElement<PanelProps> => {
  const headerClasses = classnames('panel-header', headerClass)
  return (
    <div className="panel">
      {header ? (
        <div className={headerClasses}>
          {typeof header === 'string' ? (
            <div className="panel-title">{header}</div>
          ) : (
            header
          )}
        </div>
      ) : null}
      {nav ? <div className="panel-nav">{nav}</div> : null}
      {content ? <div className="panel-body">{content}</div> : null}
      {footer ? <div className="panel-footer">{footer}</div> : null}
    </div>
  )
}
Panel.defaultProps = {
  header: null,
  nav: null,
  content: null,
  footer: null,
  headerClass: '',
}
export default Panel
