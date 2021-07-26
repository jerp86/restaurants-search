import styled from 'styled-components';

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

export const FutureMap = styled.div`
  flex: 1;
  background-color: red;
`;
