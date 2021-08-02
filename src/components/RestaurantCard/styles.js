import styled from 'styled-components';

export const Restaurant = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 8px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  border-left: 5px solid transparent;

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
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 8px;
`;

export const Address = styled.span`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.text};
  margin: 8px 0;
`;

export const RestaurantPhoto = styled.img`
  display: ${({ imageLoaded }) => (imageLoaded ? 'block' : 'none')};
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 6px;
`;
