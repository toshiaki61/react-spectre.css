import { ReactNode } from 'react';
import { TooltipPositionType } from 'utilities/attr/interfaces';
export interface TooltipProps {
    children: ReactNode;
    text: string;
    position?: TooltipPositionType;
}
