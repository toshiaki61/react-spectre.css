import React from 'react';
export interface ItemProps {
    id: string;
    name: string;
    tooltip: string;
}
export interface IStepProps {
    items: ItemProps[];
    active?: string;
}
declare const Step: {
    ({ items, active }: IStepProps): React.ReactElement<IStepProps> | null;
    defaultProps: {
        active: string;
    };
};
export default Step;
