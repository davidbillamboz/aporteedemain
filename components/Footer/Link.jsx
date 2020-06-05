import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';

const Link = ({ href, as, children }) => (
  <div className="md:mx-2">
    <NextLink href={href} as={as}>
      <a className="hover:underline">{children}</a>
    </NextLink>
  </div>
);

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  as: PropTypes.string,
};

Link.defaultProps = {
  as: null,
};

export default Link;
