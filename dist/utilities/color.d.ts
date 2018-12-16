export interface IColorParameters {
    primary?: boolean;
    secondary?: boolean;
    dark?: boolean;
    gray?: boolean;
    light?: boolean;
    success?: boolean;
    warning?: boolean;
    error?: boolean;
}
declare function text({ primary, secondary, dark, gray, light, success, warning, error, }: IColorParameters, className?: string): string;
declare function background({ primary, secondary, dark, gray, light, success, warning, error, }: IColorParameters, className?: string): string;
export { text, background };
