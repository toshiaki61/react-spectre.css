import classnames from 'classnames'
import React, {Fragment, ReactNode} from 'react'

interface IHeroProps {
  children?: ReactNode
  title?: ReactNode
  content?: ReactNode
  primary?: boolean
  gray?: boolean
}
const Hero = ({children, title, content, gray, primary}: IHeroProps) => {
  const className = classnames('hero', {'bg-gray': gray, 'bg-primary': primary})
  return (
    <div className={className}>
      <div className="hero-body">
        {children ? (
          children
        ) : (
          <Fragment>
            <h1>{title}</h1>
            <p>{content}</p>
          </Fragment>
        )}
      </div>
    </div>
  )
}

export default Hero
