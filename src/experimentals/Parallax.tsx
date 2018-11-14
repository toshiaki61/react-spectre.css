import React, {ReactElement} from 'react'

export interface IParallaxProps {
  src: string
  alt: string
  title: string
}
const Parallax = ({
  src,
  alt,
  title,
}: IParallaxProps): ReactElement<IParallaxProps> => (
  <div className="parallax">
    <div className="parallax-top-left" />
    <div className="parallax-top-right" />
    <div className="parallax-bottom-left" />
    <div className="parallax-bottom-right" />
    <div className="parallax-content">
      <div className="parallax-front">
        <h2>{title}</h2>
      </div>
      <div className="parallax-back">
        <img src={src} className="img-responsive rounded" alt={alt} />
      </div>
    </div>
  </div>
)
Parallax.defaultProps = {}
export default Parallax
