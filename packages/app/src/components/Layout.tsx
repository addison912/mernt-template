import React from 'react';
import { Wrapper, WrapperVariant } from './Wrapper';
import NavBar from './NavBar';
import Head from './Head';
import { Footer } from './Footer';

interface LayoutProps {
  variant?: WrapperVariant;
  children: React.ReactElement;
}

export const Layout: React.FC<LayoutProps> = ({ children, variant }) => {
  return (
    <>
      <Head />
      <NavBar />
      <Wrapper variant={variant}>{children}</Wrapper>
      <Footer />
    </>
  );
};
