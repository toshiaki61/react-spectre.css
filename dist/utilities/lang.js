import classnames from 'classnames';
export default function lang(_a, className) {
    var ja = _a.ja, ko = _a.ko, zhHans = _a.zhHans, zhHant = _a.zhHant, cjk = _a.cjk;
    return classnames({
        'lang-ja': ja,
        'lang-ko': ko,
        'lang-zh-hans': zhHans,
        'lang-zh-hant': zhHant,
        'lang-cjk': cjk,
    }, className);
}
//# sourceMappingURL=lang.js.map