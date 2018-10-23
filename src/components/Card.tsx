import React, {ReactElement} from 'react'

export interface ItemHeaderProps {
  button: ReactElement<any>
  title: ReactElement<any>
  subtitle: ReactElement<any>
}
export interface ItemProps {
  type?: 'image' | 'body' | 'footer' | 'header'
  content?: ItemHeaderProps | ReactElement<any> | string | any
}
const Item = ({type, content}: ItemProps): ReactElement<ItemProps> => {
  switch (type) {
    case 'image':
      return <div className="card-image">{content}</div>
    case 'body':
      return <div className="card-body">{content}</div>
    case 'footer':
    default:
      return <div className="card-footer">{content}</div>
  }
}
Item.defaultProps = {
  type: '',
  content: null,
}
export interface CardProps {
  items: Array<ItemProps>
}
const Card = ({items}: CardProps): ReactElement<CardProps> => (
  <div className="card">
    {items.map((item, i) => {
      const key = `card-${i}`
      if (item.type === 'header') {
        return (
          <div key={key} className="card-header">
            {(item.content as ItemHeaderProps).button}
            {(item.content as ItemHeaderProps).title ? (
              <div className="card-title h5">
                {(item.content as ItemHeaderProps).title}
              </div>
            ) : null}
            {(item.content as ItemHeaderProps).subtitle ? (
              <div className="card-subtitle text-gray">
                {(item.content as ItemHeaderProps).subtitle}
              </div>
            ) : null}
          </div>
        )
      }
      return <Item key={key} {...item} />
    })}
  </div>
)
export default Card
