import { Text } from '@/components/';
import { colors } from '@/themes';
import React from 'react';

import * as Styled from './styles';

export const Footer = () => {
  return (
    <Styled.Footer width="100%" height="34px" background={colors.lightGray}>
      <Text fontSize="12px">MKS sistemas © Todos os direitos reservados</Text>
    </Styled.Footer>
  );
};
