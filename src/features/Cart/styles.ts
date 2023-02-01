import styled from 'styled-components';
import { CartProps } from './types';
import { size } from '@/themes';
import { Stack } from '@/components/Layout/Stack/styles';
import { Button } from '@/components/Form/Button/styles';
import { Text } from '@/components/Typography/Text/styles';

const Cart = styled.div<CartProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: ${({ background }) => background};
  z-index: 999;
  position: absolute;
  right: 0;

  @media (max-width: ${size.small}px) {
    width: 330px;
    min-height: 100vh;
    height: fit-content;
    ${Stack} > ${Button} {
      width: 45px;
      height: 45px;
    }

    ${Button} {
      height: 65px;
      ${Text} {
        font-size: 20px;
      }
    }
  }
`;

export { Cart };
