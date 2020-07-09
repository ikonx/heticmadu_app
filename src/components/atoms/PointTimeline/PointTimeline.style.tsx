import { View } from 'react-native';
import styled from 'styled-components';

export const StyledPointTimeline = styled(View)<{ isActive?: boolean, spaceRight?: number }>`
  margin-right: ${({ spaceRight }) => spaceRight}px;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background: ${({ isActive }) => !isActive ? 'rgba(115, 139, 255, .25)' : 'rgb(115, 139, 255)'}
`;

export const StyledCenterPointTimeline = styled(View)`
  width: 8px;
  height: 8px;
  background: #738BFF;
  background: ${({ isActive }) => !isActive ? '#738BFF' : 'white'}
  margin: auto;
  border-radius: 12px;
  z-index: 1;
`;
