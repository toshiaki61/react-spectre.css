interface ILangParameters {
    ja?: boolean;
    ko?: boolean;
    zhHans?: boolean;
    zhHant?: boolean;
    cjk?: boolean;
}
export default function lang({ ja, ko, zhHans, zhHant, cjk }: ILangParameters, className: string): string;
export {};
