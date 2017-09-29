import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Container from './Container';
import { acquireContainerProps } from './Columns';

const Section = ({ children, className, center, ...props }) => {
  const classes = classnames({ 'navbar-section': !center, 'navbar-center': center }, className);
  return (
    <section className={classes} {...props}>
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  center: PropTypes.bool,
};
Section.defaultProps = {
  className: '',
  center: false,
};

const NavbarWithoutContainer = ({ children, className, ...props }) => {
  const classes = classnames('navbar', className);

  return (
    <header className={classes} {...props}>
      {children}
    </header>
  );
};

NavbarWithoutContainer.propTypes = {
  children: PropTypes.instanceOf(Section).isRequired,
  className: PropTypes.string,
};
NavbarWithoutContainer.defaultProps = {
  className: '',
};

const Navbar = ({ children, container, ...props }) => {
  const content = <NavbarWithoutContainer {...props}>{children}</NavbarWithoutContainer>;

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

Navbar.propTypes = {
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
Navbar.defaultProps = {
  container: false,
};

export default Navbar;

const Brand = ({ children, className, ...props }) => {
  const classes = classnames('navbar-brand', className);
  let component = null;
  if (props.href) {
    component = <a className={classes} {...props}>{children}</a>;
  } else {
    component = <span className={classes} {...props}>{children}</span>;
  }
  return component;
};

Brand.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  href: PropTypes.string,
};
Brand.propTypes = {
  className: '',
  href: '',
};

export { Brand, Section };
