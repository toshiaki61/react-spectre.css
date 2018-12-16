/// <reference types="react" />
export interface IRadioSingleProps {
    label?: string;
    name: string;
    className?: string;
    checked?: boolean;
    value?: string;
}
interface IRadioProps extends IRadioSingleProps {
    options: {
        [key: string]: string;
    };
}
declare const Radio: {
    ({ name, label, options, ...props }: IRadioProps): JSX.Element;
    defaultProps: {
        options: {};
    };
};
export default Radio;
