/* @flow */
import * as React from 'react'

export type ItemHeaderProps = {
  button: React.DOM,
  title: React.DOM,
  subtitle: React.DOM,
}
export type ItemProps = {
  type?: 'image' | 'body' | 'footer' | 'header',
  content?: React.DOM,
}
const Item = ({type, content}: ItemProps): React.Element<*> => {
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

export type CardProps = {
  items: Array<ItemProps>,
}
const Card = ({items}: CardProps): React.Element<*> => (
  <div className="card">
    {items.map((item, i) => {
      const key = `card-${i}`
      if (item.type === 'header') {
        return (
          <div key={key} className="card-header">
            {item.content.button}
            {item.content.title ? (
              <div className="card-title h5">{item.content.title}</div>
            ) : null}
            {item.content.subtitle ? (
              <div className="card-subtitle text-gray">
                {item.content.subtitle}
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
