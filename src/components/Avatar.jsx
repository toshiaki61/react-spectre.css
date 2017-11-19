/* @flow */
import * as React from 'react';
import classnames from 'classnames';

export type IconProp = {
  src: string;
  alt?: string;
  className?: string;
};
const Icon = ({ className, alt, ...props }: IconProp): React.Element<*> => {
  const classes = classnames('avatar-icon', className);
  return (
    <img className={classes} alt={alt} {...props} />
  );
};
Icon.defaultProps = {
  alt: '',
  className: '',
};

export type PresenceProp = {
  presence: string,
};
const Presence = ({ presence }: PresenceProp): React.Element<*> => (
  <i className={classnames('avatar-presence', presence)} />
);

export type AvatarProps = {
  className?: string,
  xl?: boolean,
  lg?: boolean,
  sm?: boolean,
  xs?: boolean,
  initial?: string,
  img?: string,
  icon?: React.DOM,
  alt?: string,
  presence?: '' | 'online' | 'offline' | 'away' | 'busy'
}
const Avatar = ({
  className,
  xl,
  lg,
  sm,
  xs,
  initial,
  img,
  icon,
  alt,
  presence,
  ...props
}: AvatarProps): React.Element<*> => {
  const classes = classnames(
    'avatar',
    {
      'avatar-xl': xl,
      'avatar-lg': lg,
      'avatar-sm': sm,
      'avatar-xs': xs,
    },
    className,
  );
  return (
    <figure className={classes} data-initial={initial} {...props}>
      {img ? <img src={img} alt={alt} /> : null}
      {icon ? <Avatar className="avatar-icon" initial={icon.initial} src={icon.src} alt={icon.alt} /> : null}
      {presence ? <Presence presence={presence} /> : null}
    </figure>
  );
};
Avatar.defaultProps = {
  className: '',
  xl: false,
  lg: false,
  sm: false,
  xs: false,
  initial: '',
  img: '',
  icon: undefined,
  alt: '',
  presence: '',
};

export default Avatar;
