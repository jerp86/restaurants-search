import styled from 'styled-components';

import { pxToRem } from '../../utils';

export const Restaurant = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-top: ${pxToRem(8)};
  padding: ${pxToRem(16)};
  background-color: ${({ theme }) => theme.colors.white};
  border-left: ${pxToRem(5)} solid transparent;

  :hover {
    background-color: ${({ theme }) => theme.colors.background};
    border-left-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${pxToRem(24)};
  font-weight: 700;
  line-height: ${pxToRem(29)};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${pxToRem(8)};
`;

export const Address = styled.span`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${pxToRem(16)};
  line-height: ${pxToRem(19)};
  color: ${({ theme }) => theme.colors.text};
  margin: ${pxToRem(8)} 0;
`;

export const RestaurantPhoto = styled.img`
  display: ${({ imageLoaded }) => (imageLoaded ? 'block' : 'none')};
  width: ${pxToRem(100)};
  height: ${pxToRem(100)};
  object-fit: cover;
  border-radius: ${pxToRem(6)};
`;
