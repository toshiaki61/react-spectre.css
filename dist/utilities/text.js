import classnames from 'classnames';
export default function text(_a, className) {
    var left = _a.left, center = _a.center, right = _a.right, justify = _a.justify, lowercase = _a.lowercase, uppercase = _a.uppercase, capitalize = _a.capitalize, normal = _a.normal, bold = _a.bold, italic = _a.italic, large = _a.large, ellipsis = _a.ellipsis, clip = _a.clip, textBreak = _a.textBreak;
    return classnames({
        'text-left': left,
        'text-center': center,
        'text-right': right,
        'text-justify': justify,
        'text-lowercase': lowercase,
        'text-uppercase': uppercase,
        'text-capitalize': capitalize,
        'text-normal': normal,
        'text-bold': bold,
        'text-italic': italic,
        'text-large': large,
        'text-ellipsis': ellipsis,
        'text-clip': clip,
        'text-break': textBreak,
    }, className);
}
//# sourceMappingURL=text.js.map