export interface IDisplayParameters {
    block?: boolean;
    inline?: boolean;
    inlineBlock?: boolean;
    flex?: boolean;
    inlineFlex?: boolean;
    none?: boolean;
    hide?: boolean;
    visible?: boolean;
    invisible?: boolean;
    textHide?: boolean;
    assistive?: boolean;
}
export default function display({ block, inline, inlineBlock, flex, inlineFlex, none, hide, visible, invisible, textHide, assistive, }: IDisplayParameters, className: string): string;
