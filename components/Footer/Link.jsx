import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';

const Link = ({ href, children }) => (
  <div className="md:mx-2">
    <NextLink href={href}>
      <a className="hover:underline">{children}</a>
    </NextLink>
  </div>
);

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

export default Link;
