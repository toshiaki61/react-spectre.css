import React, { ChangeEvent, FocusEvent, MouseEvent } from 'react';
export interface ISuggestProps {
    id: string;
    name: string;
    img?: string;
    initial?: string;
}
export interface IAutocompleteProps {
    placeholder?: string;
    active?: boolean;
    selected: ISuggestProps[];
    suggests: ISuggestProps[];
    input: string;
    loading?: boolean;
    onChange: (e: ChangeEvent<any>) => void;
    onFocus: (e: FocusEvent<any>) => void;
    onBlur: (e: FocusEvent<any>) => void;
    onClearClick: (e: MouseEvent<any>, id: string) => void;
    onSelected: (e: MouseEvent<any>, id: string) => void;
}
declare const Autocomplete: {
    ({ placeholder, active, selected, suggests, input, loading, onChange, onFocus, onBlur, onClearClick, onSelected, }: IAutocompleteProps): React.ReactElement<IAutocompleteProps>;
    defaultProps: {
        placeholder: string;
        active: boolean;
        loading: boolean;
    };
};
export default Autocomplete;
