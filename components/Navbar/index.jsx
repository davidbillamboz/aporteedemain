import React, { useState } from 'react';
import NextLink from 'next/link';
import Router from 'next/router';
import useBreakpoint from '../../hooks/useBreakpoint';
import useDisableScroll from '../../hooks/useDisableScroll';
import Burger from './Burger';
import NavHorizontal from './NavHorizontal';
import NavFull from './NavFull';

const Navbar = () => {
  const [navFullOpen, setNavFullOpen] = useState(false);

  const onBurgerClick = () => setNavFullOpen(!navFullOpen);
  const breakpointReached = useBreakpoint(768);

  // Disable the scroll when the nav is opened
  useDisableScroll(navFullOpen);

  // Close the nav when the breakpoint is reached
  if (navFullOpen && breakpointReached) {
    setNavFullOpen(false);
  }

  // Close the nav when the route changes
  const handleRouteChange = () => {
    if (navFullOpen) {
      setNavFullOpen(false);
    }
  };
  Router.events.on('routeChangeStart', handleRouteChange);

  return (
    <div className="bg-blueZodiac h-20 text-white relative">
      <div className="container mx-auto h-20 flex items-center px-4">
        <div className="mr-6 md:hidden">
          <Burger onClick={onBurgerClick} active={navFullOpen} />
        </div>
        <div className="text-2xl font-bold font-krub uppercase leading-none hover:text-riptide">
          <NextLink href="/">
            <a>À Portée de Main</a>
          </NextLink>
        </div>
        <div className="hidden md:block flex-grow">
          <NavHorizontal />
        </div>
      </div>
      <div
        className={`${
          navFullOpen ? 'flex' : 'hidden'
        } md:hidden bg-blueZodiac fixed inset-0 top-20 z-10`}
      >
        <NavFull />
      </div>
    </div>
  );
};

export default Navbar;
