import styled from 'styled-components';
import { View } from 'react-native';

export const StyledIconContainer = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const StyledIcon = styled(View)`
  position: absolute;
  z-index: 1;
  transform: translateY(-6px);
`;
