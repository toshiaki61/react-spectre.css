import React from 'react';
export interface IParallaxProps {
    src: string;
    alt: string;
    title: string;
}
declare const Parallax: {
    ({ src, alt, title, }: IParallaxProps): React.ReactElement<IParallaxProps>;
    defaultProps: {};
};
export default Parallax;
