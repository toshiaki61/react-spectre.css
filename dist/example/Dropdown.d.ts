import { Component } from 'react';
interface IDropdownExampleState {
    value: string;
    active: boolean;
}
declare class DropdownExample extends Component<{}, IDropdownExampleState> {
    state: {
        value: string;
        active: boolean;
    };
    render(): JSX.Element;
    private onClick;
}
export default DropdownExample;
