import React from 'react';
import NextLink from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const NavHorizontal = () => (
  <div className="flex items-center justify-end">
    <div className="leading-tight font-krub font-bold mr-10 hover:underline hover:text-riptide">
      <NextLink href="/manifesto">
        <a>Manifesto</a>
      </NextLink>
    </div>
    {/* <div className="leading-tight font-krub font-bold mr-10 hover:underline hover:text-riptide">
      <NextLink href="/soutiens">
        <a>Ils nous soutiennent</a>
      </NextLink>
    </div> */}
    <div className="leading-tight font-krub font-bold mr-10 hover:underline hover:text-riptide">
      <NextLink href="/contact">
        <a>Contact</a>
      </NextLink>
    </div>
    <div>
      <NextLink href="/engagement">
        <a className="rounded-full bg-white text-blueZodiac font-bold px-6 h-12 leading-none flex items-center hover:bg-opacity-95">
          <FontAwesomeIcon
            icon={faChevronRight}
            className="inline-block mr-2 w-10 h-auto"
          />
          <span className="inline-block">Je m’engage</span>
        </a>
      </NextLink>
    </div>
  </div>
);

export default NavHorizontal;
