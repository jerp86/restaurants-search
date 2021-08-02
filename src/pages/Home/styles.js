import styled from 'styled-components';
import Slider from 'react-slick';

export const Wrapper = styled.div`
  display: flex;
`;

export const Container = styled.aside`
  background-color: ${({ theme }) => theme.colors.background};
  width: 360px;
  height: 98vh;
  overflow-y: auto;
`;

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.white};
  padding: 16px;
`;

export const Logo = styled.img`
  margin: 16px;
  max-width: fit-content;
`;

export const Corousel = styled(Slider)`
  .slick-slide {
    margin-right: 16px;
  }
`;

export const CarouselTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  font-size: 24px;
  font-weight: 700;
  line-height: 150%;
  margin: 16px 0;
`;

export const ModalTitle = styled.p`
  margin-bottom: 8px;
  letter-spacing: 0.11px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  line-height: 29px;
  font-size: 24px;
  font-weight: 700;
`;

export const ModalContent = styled(ModalTitle)`
  letter-spacing: 0.11px;
  line-height: 19px;
  font-size: 16px;
  font-weight: 400;
`;
