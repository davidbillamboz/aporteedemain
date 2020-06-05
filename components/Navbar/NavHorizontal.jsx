import React from 'react';
import NextLink from 'next/link';

const NavHorizontal = () => (
  <>
    <div className="leading-tight font-krub font-bold mr-10 hover:underline hover:text-riptide">
      <NextLink href="/manifesto">
        <a>Manifesto</a>
      </NextLink>
    </div>
    <div className="leading-tight font-krub font-bold mr-10 hover:underline hover:text-riptide">
      <NextLink href="/soutiens">
        <a>Ils nous soutiennent</a>
      </NextLink>
    </div>
    <div className="leading-tight font-krub font-bold hover:underline hover:text-riptide">
      <NextLink href="/contact">
        <a>Contact</a>
      </NextLink>
    </div>
  </>
);

export default NavHorizontal;
