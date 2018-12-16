interface ITextParameters {
    left?: boolean;
    center?: boolean;
    right?: boolean;
    justify?: boolean;
    lowercase?: boolean;
    uppercase?: boolean;
    capitalize?: boolean;
    normal?: boolean;
    bold?: boolean;
    italic?: boolean;
    large?: boolean;
    ellipsis?: boolean;
    clip?: boolean;
    textBreak?: boolean;
}
export default function text({ left, center, right, justify, lowercase, uppercase, capitalize, normal, bold, italic, large, ellipsis, clip, textBreak, }: ITextParameters, className: string): string;
export {};
