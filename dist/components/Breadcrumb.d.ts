import React from 'react';
export interface ItemProps {
    link?: string;
    content?: string;
}
export interface IBreadcrumbProps {
    items: ItemProps[];
}
declare const Breadcrumb: ({ items, }: IBreadcrumbProps) => React.ReactElement<IBreadcrumbProps> | null;
export default Breadcrumb;
