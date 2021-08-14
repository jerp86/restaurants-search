import React from 'react';
import styled, { keyframes } from 'styled-components';

import { pxToRem } from '../../utils';

const KeyFrameLoading = keyframes`
  0% {
    opacity: 0.5,
  }
  100% {
    opacity: 1;
  }
`;

const LoadingSkeleton = styled.div`
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: ${pxToRem(6)};
  margin-bottom: ${pxToRem(8)};
  min-width: ${(props) => props.width};
  height: ${(props) => props.height};
  animation: ${KeyFrameLoading} 500ms infinite alternate;
`;

export default ({ width, height }) => <LoadingSkeleton width={width} height={height} />;
