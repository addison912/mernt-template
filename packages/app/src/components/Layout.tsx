import React, { ReactElement } from 'react';
import { Wrapper, WrapperVariant } from './Wrapper';

interface LayoutProps {
  variant?: WrapperVariant;
  children: ReactElement;
}

export const Layout: React.FC<LayoutProps> = ({ children, variant }) => {
  return (
    <>
      <Wrapper variant={variant}>{children}</Wrapper>
    </>
  );
};
