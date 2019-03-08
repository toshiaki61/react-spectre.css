import { ReactNode } from 'react';
import { BasePartProps, StyleProps } from '../../interfaces';
import { IconType } from 'elements/Icon';
export declare type EmptyPartProps = Partial<BasePartProps>;
export interface EmptyProps extends Partial<StyleProps> {
    iconType?: IconType;
    title?: ReactNode;
    subtitle?: ReactNode;
    action?: ReactNode;
}
