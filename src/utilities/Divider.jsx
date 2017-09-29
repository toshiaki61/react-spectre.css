import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Divider = ({ content, vertical, li, center, className }) => {
  const classes = classnames({
    divider: !vertical,
    'divider-vert': vertical,
    'text-center': center,
  }, className);
  if (li) {
    return <li className={classes} data-content={content} />;
  }
  return (
    <div className={classes} data-content={content} />
  );
};
Divider.propTypes = {
  content: PropTypes.string,
  vertical: PropTypes.bool,
  li: PropTypes.bool,
  center: PropTypes.bool,
  className: PropTypes.string,
};
Divider.defaultProps = {
  content: '',
  vertical: false,
  li: false,
  center: false,
  className: '',
};

export default Divider;
