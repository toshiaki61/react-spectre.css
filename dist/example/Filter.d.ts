import { Component } from 'react';
interface IFilterProps {
    tags: {
        key: string;
    };
    data: Array<{
        tag: string;
        title: string;
        subtitle: string;
    }>;
}
interface IFilterExampleState {
    active: string;
}
declare class FilterExample extends Component<IFilterProps, IFilterExampleState> {
    static defaultProps: {
        tags: {
            'tag-0': string;
            'tag-1': string;
            'tag-2': string;
            'tag-3': string;
            'tag-4': string;
        };
        data: {
            tag: string;
            title: string;
            subtitle: string;
        }[];
    };
    state: {
        active: string;
    };
    render(): JSX.Element;
    private onChange;
}
export default FilterExample;
