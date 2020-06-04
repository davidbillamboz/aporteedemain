import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Button = ({ children, ...rest }) => (
  <button type="button" {...rest}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

const Link = ({ children, href, ...rest }) => (
  <NextLink href={href}>
    <a {...rest}>{children}</a>
  </NextLink>
);

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

const MainButton = ({ title, disabled, href, ...rest }) => {
  const Component = href ? Link : Button;

  return (
    <Component
      href={href}
      className={`rounded-full bg-chelseaCucumber ${
        !disabled ? 'hover:bg-opacity-95' : 'opacity-50 cursor-default'
      } text-white font-extrabold tracking-wider uppercase text-xl h-20 px-6 leading-none flex items-center shadow`}
      {...rest}
    >
      <FontAwesomeIcon
        icon={faChevronRight}
        className="inline-block mr-2 w-10 h-auto"
      />
      <span className="inline-block">{title}</span>
    </Component>
  );
};

MainButton.propTypes = {
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  href: PropTypes.string,
};

MainButton.defaultProps = {
  disabled: false,
  href: null,
};

export default MainButton;
