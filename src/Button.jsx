import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Link from './Link';

const Button = ({
  children,
  className,
  loading,
  href,
  lg,
  sm,
  block,
  to,
  inputGroup,
  primary,
  clear,
  link,
  action,
  circle,
  ...props
}) => {
  const linkButton = link || href || to;
  const classes = classnames(
    'btn',
    {
      loading,
      'btn-lg': lg,
      'btn-sm': sm,
      'btn-block': block,
      'input-group-btn': inputGroup,
      'btn-primary': primary,
      'btn-clear': clear,
      'btn-link': linkButton && !primary,
      'btn-action': action,
      circle,
    },
    className,
  );

  let toReturn = null;
  if (href) {
    toReturn = <a href={href} className={classes} {...props}>{children}</a>;
  } else if (to) {
    toReturn = <Link to={to} className={classes} {...props}>{children}</Link>;
  } else {
    toReturn = <button className={classes} {...props}>{children}</button>;
  }

  return toReturn;
};

Button.propTypes = {
  loading: PropTypes.bool,
  href: PropTypes.string,
  lg: PropTypes.bool,
  sm: PropTypes.bool,
  block: PropTypes.bool,
  to: PropTypes.string,
  inputGroup: PropTypes.bool,
  primary: PropTypes.bool,
  clear: PropTypes.bool,
  link: PropTypes.bool,
  action: PropTypes.bool,
  circle: PropTypes.bool,
};

export default Button;

const Group = ({ children, className, block }) => {
  const classes = classnames(
    'btn-group',
    { 'btn-group-block': block },
    className,
  );

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

Group.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  block: PropTypes.bool,
};
Group.defaultProps = {
  className: '',
  block: false,
};

export { Group };
