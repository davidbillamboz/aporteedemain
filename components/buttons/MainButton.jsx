import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const MainButton = ({ title, disabled, href, ...rest }) => {
  const wrapButton = (element) => {
    if (href) {
      return (
        <NextLink href={href}>
          <a>{element}</a>
        </NextLink>
      );
    }
    return element;
  };

  return wrapButton(
    <button
      type="button"
      className={`rounded-full bg-chelseaCucumber text-white ${
        !disabled ? 'hover:bg-opacity-95' : 'opacity-50 cursor-default'
      } font-extrabold tracking-wider uppercase text-xl h-20 px-6 leading-none flex items-center shadow
      `}
      {...rest}
    >
      <FontAwesomeIcon
        icon={faChevronRight}
        className="inline-block mr-2 w-10 h-auto"
      />
      <span className="inline-block">{title}</span>
    </button>
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
