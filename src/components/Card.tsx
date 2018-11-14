import React, {ReactElement} from 'react'

export interface IItemHeaderProps {
  button: ReactElement<any>
  title: ReactElement<any>
  subtitle: ReactElement<any>
}
export interface IItemProps {
  type?: 'image' | 'body' | 'footer' | 'header'
  content?: IItemHeaderProps | ReactElement<any> | string | any
}
const Item = ({type, content}: IItemProps): ReactElement<IItemProps> => {
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
export interface ICardProps {
  items: IItemProps[]
}
const Card = ({items}: ICardProps): ReactElement<ICardProps> => (
  <div className="card">
    {items.map((item, i) => {
      const key = `card-${i}`
      if (item.type === 'header') {
        return (
          <div key={key} className="card-header">
            {(item.content as IItemHeaderProps).button}
            {(item.content as IItemHeaderProps).title ? (
              <div className="card-title h5">
                {(item.content as IItemHeaderProps).title}
              </div>
            ) : null}
            {(item.content as IItemHeaderProps).subtitle ? (
              <div className="card-subtitle text-gray">
                {(item.content as IItemHeaderProps).subtitle}
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
