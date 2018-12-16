export interface ICursorParameters {
    hand?: boolean;
    move?: boolean;
    zoomIn?: boolean;
    zoomOut?: boolean;
    notAllowed?: boolean;
    auto?: boolean;
}
export default function cursor({ hand, move, zoomIn, zoomOut, notAllowed, auto }: ICursorParameters, className: string): string;
