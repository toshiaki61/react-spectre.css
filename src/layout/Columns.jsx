import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Container from './Container';

const ColumnsWithoutContainer = ({ children, gapless, oneline, className, ...props }) => {
  const classes = classnames('columns', {
    'col-gapless': gapless,
    'col-oneline': oneline,
  }, className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

ColumnsWithoutContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  gapless: PropTypes.bool,
  oneline: PropTypes.bool,
};
ColumnsWithoutContainer.defaultProps = {
  className: '',
  gapless: false,
  oneline: false,
};

export function acquireContainerProps(option) {
  switch (typeof option) {
    case 'boolean':
      return null;
    case 'string':
      return { [option]: true };
    default:
      return option;
  }
}

const Columns = ({ children, container, ...props }) => {
  const content = <ColumnsWithoutContainer {...props}>{children}</ColumnsWithoutContainer>;

  if (!container) {
    return content;
  }
  const containerProps = acquireContainerProps(container);
  return (
    <Container {...containerProps}>
      {content}
    </Container>
  );
};

Columns.propTypes = {
  children: PropTypes.node.isRequired,
  container: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.shape({
      className: PropTypes.string,
      xs: PropTypes.bool,
      sm: PropTypes.bool,
      md: PropTypes.bool,
      lg: PropTypes.bool,
      xl: PropTypes.bool,
    }),
  ]),
};
Columns.defaultProps = {
  container: false,
};

export default Columns;
