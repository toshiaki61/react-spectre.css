import classnames from 'classnames'
import React, {CSSProperties} from 'react'

interface IIconProps {
  className?: string
  size?: '' | '2x' | '3x' | '4x'
  name?: string
  arrowUp?: boolean
  arrowRight?: boolean
  arrowDown?: boolean
  arrowLeft?: boolean
  upward?: boolean
  forward?: boolean
  downward?: boolean
  back?: boolean
  caret?: boolean
  menu?: boolean
  apps?: boolean
  moreHoriz?: boolean
  moreVert?: boolean
  resizeHoriz?: boolean
  resizeVert?: boolean
  plus?: boolean
  minus?: boolean
  cross?: boolean
  check?: boolean
  stop?: boolean
  shutdown?: boolean
  refresh?: boolean
  search?: boolean
  flag?: boolean
  bookmark?: boolean
  edit?: boolean
  del?: boolean
  share?: boolean
  download?: boolean
  upload?: boolean
  mail?: boolean
  people?: boolean
  message?: boolean
  photo?: boolean
  time?: boolean
  location?: boolean
  link?: boolean
  emoji?: boolean
  form?: boolean
  loading?: boolean
  style?: CSSProperties
}
const Icon = ({
  className,
  size = '',
  name = '',
  arrowUp,
  arrowRight,
  arrowDown,
  arrowLeft,
  upward,
  forward,
  downward,
  back,
  caret,
  menu,
  apps,
  moreHoriz,
  moreVert,
  resizeHoriz,
  resizeVert,
  plus,
  minus,
  cross,
  check,
  stop,
  shutdown,
  refresh,
  search,
  flag,
  bookmark,
  edit,
  del,
  share,
  download,
  upload,
  mail,
  people,
  message,
  photo,
  time,
  location,
  link,
  emoji,
  form,
  loading,
  ...props
}: IIconProps) => {
  const classes = classnames(
    {
      icon: !form,
      'form-icon': form,
      loading,
      [`icon-${name}`]: name,
      [`icon-${size}`]: size,
      'icon-arrow-up': arrowUp,
      'icon-arrow-right': arrowRight,
      'icon-arrow-down': arrowDown,
      'icon-arrow-left': arrowLeft,
      'icon-upward': upward,
      'icon-forward': forward,
      'icon-downward': downward,
      'icon-back': back,
      'icon-caret': caret,
      'icon-menu': menu,
      'icon-apps': apps,
      'icon-more-horiz': moreHoriz,
      'icon-more-vert': moreVert,
      'icon-resize-horiz': resizeHoriz,
      'icon-resize-vert': resizeVert,
      'icon-plus': plus,
      'icon-minus': minus,
      'icon-cross': cross,
      'icon-check': check,
      'icon-stop': stop,
      'icon-shutdown': shutdown,
      'icon-refresh': refresh,
      'icon-search': search,
      'icon-flag': flag,
      'icon-bookmark': bookmark,
      'icon-edit': edit,
      'icon-delete': del,
      'icon-share': share,
      'icon-download': download,
      'icon-upload': upload,
      'icon-mail': mail,
      'icon-people': people,
      'icon-message': message,
      'icon-photo': photo,
      'icon-time': time,
      'icon-location': location,
      'icon-link': link,
      'icon-emoji': emoji,
    },
    className
  )
  return <i className={classes} {...props} />
}
Icon.defaultProps = {
  className: '',
  size: '',
  name: '',
  arrowUp: false,
  arrowRight: false,
  arrowDown: false,
  arrowLeft: false,
  upward: false,
  forward: false,
  downward: false,
  back: false,
  caret: false,
  menu: false,
  apps: false,
  moreHoriz: false,
  moreVert: false,
  resizeHoriz: false,
  resizeVert: false,
  plus: false,
  minus: false,
  cross: false,
  check: false,
  stop: false,
  shutdown: false,
  refresh: false,
  search: false,
  flag: false,
  bookmark: false,
  edit: false,
  del: false,
  share: false,
  download: false,
  upload: false,
  mail: false,
  people: false,
  message: false,
  photo: false,
  time: false,
  location: false,
  link: false,
  emoji: false,
  form: false,
  loading: false,
}
export default Icon
