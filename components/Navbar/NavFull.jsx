import React from 'react';
import NextLink from 'next/link';
import SocialButton from '../SocialButton';

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
      <div className="inline-block mr-6">
        <SocialButton network="facebook" />
      </div>
      <div className="inline-block mr-6">
        <SocialButton network="twitter" />
      </div>
      <div className="inline-block">
        <SocialButton network="instagram" />
      </div>
    </div>
  </div>
);

export default NavFull;
