import { Component } from 'react';
interface IModalExampleState {
    active: boolean;
}
declare class ModalExample extends Component<{}, IModalExampleState> {
    state: {
        active: boolean;
    };
    render(): JSX.Element;
    private onClick;
}
export default ModalExample;
