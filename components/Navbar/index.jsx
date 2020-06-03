import React from 'react';
import NextLink from 'next/link';

import Burger from './Burger';

const Navbar = () => {
  return (
    <div className="bg-blueZodiac h-20 text-white">
      <div className="container mx-auto h-20 flex items-center px-4">
        <div className="mr-6 md:hidden">
          <Burger />
        </div>
        <div className="text-2xl font-bold font-krub uppercase leading-none">
          <NextLink href="/">
            <a>À Portée de Main</a>
          </NextLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
