import { Component } from 'react';
interface ISuggest {
    id: string;
    name: string;
    img: string;
    initial: string;
}
interface IAutocompleteExampleState {
    active: boolean;
    loading: boolean;
    suggests: ISuggest[];
    selected: ISuggest[];
    input: string;
}
declare class AutocompleteExample extends Component<{}, IAutocompleteExampleState> {
    state: IAutocompleteExampleState;
    render(): JSX.Element;
    private onClearClick;
    private onSelected;
    private onChange;
    private onFocus;
    private onBlur;
}
export default AutocompleteExample;
