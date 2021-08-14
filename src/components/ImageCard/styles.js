import styled from 'styled-components';

import { pxToRem } from '../../utils';

export const Card = styled.div`
  display: flex;
  justify-content: center;

  width: ${pxToRem(90)};
  height: ${pxToRem(90)};
  border-radius: ${pxToRem(6)};

  background-image: url(${(props) => props.photo});
  background-size: cover;
`;

export const Title = styled.span`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${pxToRem(16)};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  margin-top: ${pxToRem(8)};
  margin-left: ${pxToRem(4)};
`;
