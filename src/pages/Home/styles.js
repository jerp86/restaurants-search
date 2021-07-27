import styled from 'styled-components';
import Slider from 'react-slick';

export const Wrapper = styled.div`
  display: flex;
`;

export const Container = styled.aside`
  background-color: ${({ theme }) => theme.colors.background};
  width: 360px;
  height: 100vh;
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
  margin-bottom: 16px;
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

export const FutureMap = styled.div`
  flex: 1;
  background-color: red;
`;
