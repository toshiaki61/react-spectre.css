import { ReactNode } from 'react';
interface IHeroProps {
    children?: ReactNode;
    title?: ReactNode;
    content?: ReactNode;
    primary?: boolean;
    gray?: boolean;
}
declare const Hero: ({ children, title, content, gray, primary }: IHeroProps) => JSX.Element;
export default Hero;
