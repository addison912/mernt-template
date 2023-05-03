import { Box, BoxProps } from '@chakra-ui/react';

import React, { FunctionComponent, ReactElement } from 'react';

export type WrapperVariant = 'small' | 'regular';
interface WrapperProps {
  children: ReactElement;
  variant?: 'small' | 'regular';
  props?: BoxProps;
}

export const Wrapper: FunctionComponent<WrapperProps> = ({ children, variant = 'small', props }) => {
  return (
    <Box margin={8} mx="auto" px={4} maxW={variant === 'regular' ? '800px' : '400px'} w="100%" {...props}>
      {children}
    </Box>
  );
};
