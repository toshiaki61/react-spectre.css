import { ReactElement } from 'react';
export interface ISwitchProps {
    children: ReactElement<any>;
    className?: string;
}
declare const Switch: {
    ({ children, className, ...props }: ISwitchProps): JSX.Element;
    defaultProps: {
        className: string;
    };
};
export default Switch;
