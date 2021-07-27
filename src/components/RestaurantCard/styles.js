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
