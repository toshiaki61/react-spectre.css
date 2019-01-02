import React, {ReactElement} from 'react'

import {CardItemHeaderProps, CardProps} from './interfaces'

import CardBody from './CardBody'
import CardFooter from './CardFooter'
import CardHeader from './CardHeader'
import CardImage from './CardImage'
import CardSubtitle from './CardSubtitle'
import CardTitle from './CardTitle'

function isCardItemHeader(item: any): item is CardItemHeaderProps {
  return item.button && item.title
}
const Card = ({items, children}: CardProps): ReactElement<CardProps> => (
  <div className="card">
    {children
      ? children
      : items &&
        items.map(item => {
          if (item.type === 'header' && isCardItemHeader(item.content)) {
            const {button, title, subtitle} = item.content
            return (
              <CardHeader key={item.id}>
                {button}
                {title ? <CardTitle className="h5">{title}</CardTitle> : null}
                {subtitle ? (
                  <CardSubtitle className="text-gray">{subtitle}</CardSubtitle>
                ) : null}
              </CardHeader>
            )
          }
          switch (item.type) {
            case 'image':
              return <CardImage>{item.content}</CardImage>
            case 'footer':
              return <CardFooter>{item.content}</CardFooter>
            case 'body':
            default:
              return <CardBody>{item.content}</CardBody>
          }
        })}
  </div>
)
export default Card
