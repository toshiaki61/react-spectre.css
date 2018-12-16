import React, { ChangeEvent } from 'react';
export interface ItemProps {
    tag: string;
    title: string;
    subtitle: string;
}
export interface IFilterProps {
    tags: {
        [key: string]: string;
    };
    data: ItemProps[];
    active: string;
    onChange: (e: ChangeEvent<HTMLInputElement>, id: string) => void;
}
declare const Filter: ({ tags, data, active, onChange, }: IFilterProps) => React.ReactElement<IFilterProps>;
export default Filter;
