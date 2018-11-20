import classnames from 'classnames'
import React, {ReactElement, ReactNode} from 'react'

export interface IPanelProps {
  header?: ReactElement<any>
  nav?: ReactElement<any>
  content?: ReactNode
  footer?: ReactElement<any> | string
  headerClass?: string
  className?: string
}

const Panel = ({
  header,
  nav,
  content,
  footer,
  headerClass,
  className,
}: IPanelProps): ReactElement<IPanelProps> => {
  const panelClass = classnames('panel', className)
  const headerClasses = classnames('panel-header', headerClass)
  return (
    <div className={panelClass}>
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
