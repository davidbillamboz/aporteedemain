import React from 'react';
import NextLink from 'next/link';
import SocialButtons from '../SocialButtons';

const NavFull = () => (
  <div className="p-4 flex flex-col justify-center w-full sm:items-center">
    <div>
      <div className="leading-none font-bold text-4xl mb-8 hover:underline hover:text-riptide">
        <NextLink href="/engagement">
          <a>Je m’engage</a>
        </NextLink>
      </div>
      <div className="leading-none font-bold text-4xl mb-8 hover:underline hover:text-riptide">
        <NextLink href="/manifesto">
          <a>Manifesto</a>
        </NextLink>
      </div>
      <div className="leading-none font-bold text-4xl mb-20 hover:underline hover:text-riptide">
        <NextLink href="/contact">
          <a>Contact</a>
        </NextLink>
      </div>
    </div>
    <div className="leading-none font-bold text-4xl cursor-default">
      Suivez-nous
    </div>
    <div className="mt-6 sm:mx-auto">
      <SocialButtons />
    </div>
  </div>
);

export default NavFull;
