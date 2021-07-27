import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  justify-content: center;

  width: 90px;
  height: 90px;
  border-radius: 6px;

  background-image: url(${(props) => props.photo});
  background-size: cover;
`;

export const Title = styled.span`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  margin-top: 8px;
  margin-left: 4px;
`;
