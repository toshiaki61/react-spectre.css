import React, {FC} from 'react'

import cx from 'classnames'

import {CardProps} from './interfaces'

import CardBody from './CardBody'
import CardFooter from './CardFooter'
import CardHeader from './CardHeader'
import CardImage from './CardImage'
import CardSubtitle from './CardSubtitle'
import CardTitle from './CardTitle'

import {hasCardChildren, isCardItemHeader} from './util'

function renderCard(p: CardProps) {
  if (hasCardChildren(p)) {
    return p.children
  }
  return p.items.map(item => {
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
  })
}
const Card: FC<CardProps> = p => {
  const {children, className, ...rest} = p
  return (
    <div className={cx('card', className)} {...rest}>
      {renderCard(p)}
    </div>
  )
}

export default Card
