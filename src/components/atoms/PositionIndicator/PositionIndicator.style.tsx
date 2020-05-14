import styled from 'styled-components';
import { View } from 'react-native';

export const StyledPositionIndicator = styled(View)`
  height: 24px;
  width: 24px;
  background-color: ${({ theme }) => theme.Colors.darknessBlue}25;
  border: 1px solid ${({ theme }) => theme.Colors.darknessBlue};
  border-radius: 50px;
`;

export const StyledInner = styled(View)`
  height: 16px;
  width: 16px;
  background-color: ${({ theme }) => theme.Colors.darknessBlue};
  border: 1px solid ${({ theme }) => theme.Colors.mainWhite};
  border-radius: 50px;
  margin: auto;
`;
