import React, {ReactElement} from 'react'

export interface ItemProps {
  link?: string
  content?: string
}
const Item = ({link, content}: ItemProps): ReactElement<ItemProps> => (
  <li className="breadcrumb-item">
    <a href={link}>{content}</a>
  </li>
)
Item.defaultProps = {
  link: '#',
  content: '',
}
export interface IBreadcrumbProps {
  items: ItemProps[]
}
const Breadcrumb = ({
  items,
}: IBreadcrumbProps): ReactElement<IBreadcrumbProps> | null => {
  if (items.length === 0) {
    return null
  }
  return (
    <ul className="breadcrumb">
      {items.map((item, i) => {
        const key = `breadcrumb-${i}`
        return <Item key={key} {...item} />
      })}
    </ul>
  )
}
export default Breadcrumb
