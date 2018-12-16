interface IShapeParameters {
    rounded?: boolean;
    circle?: boolean;
}
export default function shape({ rounded, circle }: IShapeParameters, className?: string): string;
export {};
