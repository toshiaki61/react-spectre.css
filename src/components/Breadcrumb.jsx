/* @flow */
import * as React from 'react';

export type ItemProps = {
  link?: string,
  content?: string,
};
const Item = ({ link, content }: ItemProps): React.Element<*> => (
  <li className="breadcrumb-item">
    <a href={link}>{content}</a>
  </li>
);
Item.defaultProps = {
  link: '#',
  content: '',
};

export type BreadcrumbProps = {
  items: Array<ItemProps>,
};
const Breadcrumb = ({ items }: BreadcrumbProps): React.Element<*> | null => {
  if (items.length === 0) {
    return null;
  }
  return (
    <ul className="breadcrumb">
      {items.map((item, i) => {
        const key = `breadcrumb-${i}`;
        return <Item key={key} {...item} />;
      })}
    </ul>
  );
};

export default Breadcrumb;
