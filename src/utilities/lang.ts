import classnames from 'classnames'

interface ILangParameters {
  ja?: boolean
  ko?: boolean
  zhHans?: boolean
  zhHant?: boolean
  cjk?: boolean
}

export default function lang(
  {ja, ko, zhHans, zhHant, cjk}: ILangParameters,
  className: string
): string {
  return classnames(
    {
      'lang-ja': ja,
      'lang-ko': ko,
      'lang-zh-hans': zhHans,
      'lang-zh-hant': zhHant,
      'lang-cjk': cjk,
    },
    className
  )
}
