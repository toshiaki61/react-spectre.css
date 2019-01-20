import { ReactNode, ReactNodeArray } from 'react';
import { SuggestProps } from './interfaces';
export declare const delimiter: string;
export declare function mark(target: string, search: string): ReactNode | ReactNodeArray;
export declare function filter(word: string, key: string): (v: SuggestProps) => boolean;
