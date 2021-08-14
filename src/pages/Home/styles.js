import styled from 'styled-components';
import Slider from 'react-slick';

import { pxToRem } from '../../utils';

export const Wrapper = styled.div`
  display: flex;
`;

export const Container = styled.aside`
  background-color: ${({ theme }) => theme.colors.background};
  width: 27.5%;
  height: 100vh;
  overflow-y: auto;
`;

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.white};
  padding: ${pxToRem(16)};
`;

export const Logo = styled.img`
  margin: ${pxToRem(16)};
  max-width: fit-content;
`;

export const Corousel = styled(Slider)`
  .slick-slide {
    margin-right: ${pxToRem(16)};
  }
`;

export const CarouselTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${pxToRem(24)};
  font-weight: 700;
  line-height: 150%;
  margin: ${pxToRem(16)} 0;
`;

export const ModalTitle = styled.p`
  margin-bottom: ${pxToRem(8)};
  letter-spacing: ${pxToRem(0.11)};
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  line-height: ${pxToRem(29)};
  font-size: ${pxToRem(24)};
  font-weight: 700;
`;

export const ModalContent = styled(ModalTitle)`
  letter-spacing: ${pxToRem(0.11)};
  line-height: ${pxToRem(29)};
  font-size: ${pxToRem(16)};
  font-weight: 400;
`;
