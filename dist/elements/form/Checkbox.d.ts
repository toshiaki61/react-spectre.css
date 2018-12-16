import React, { ReactChildren } from 'react';
export interface ICheckboxSingleProps {
    children?: ReactChildren;
    label: string;
    className?: string;
    value?: string;
}
interface ICheckboxProps extends ICheckboxSingleProps {
    options: {
        key: string;
    };
}
declare const Checkbox: {
    ({ className, label, options, ...props }: ICheckboxProps): React.ReactElement<ICheckboxProps>;
    defaultProps: {
        options: {};
    };
};
export default Checkbox;
