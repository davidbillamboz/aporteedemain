import React from 'react';
import NextLink from 'next/link';
import Link from './Link';

const Footer = () => (
  <div className="bg-deepKoamaru">
    <div className="container mx-auto text-center text-white py-24">
      <div className="text-2xl font-bold font-krub uppercase leading-none">
        <NextLink href="/">
          <a>À Portée de Main</a>
        </NextLink>
      </div>
      <nav className="mt-4 md:flex md:justify-center">
        <Link href="/contact">Contact</Link>
        <Link href="/kit">Télécharger le kit</Link>
        <Link href="/manifesto">Le Manifesto</Link>
        <Link href="/mentions-legales">Mentions légales</Link>
      </nav>
    </div>
  </div>
);

export default Footer;
