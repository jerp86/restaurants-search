import styled from 'styled-components';

import { pxToRem } from '../../utils';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background-color: rgba(78, 89, 131, 0.5);
  backdrop-filter: blur(5px);

  z-index: 999;
`;

export const Dialog = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  max-height: calc(100% - 144px);
  width: ${pxToRem(500)};
  padding: ${pxToRem(24)};

  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 ${pxToRem(32)} rgba(78, 89, 131, 0.2);
  border-radius: ${pxToRem(8)};
`;
