import styled from 'styled-components';
import { View } from 'react-native';

const StyledView = styled(View)<{ isActive?: boolean }>`
  background: ${({ isActive, theme }) =>
    isActive ? theme.Colors.mainPurple : theme.Colors.mainWhite};
  border: ${({ isActive, theme }) =>
    !isActive
      ? `1px solid ${theme.Colors.secondaryGrey}`
      : `1px solid ${theme.Colors.mainPurple}`};
  padding: 12px 0;
  align-items: center;
  border-radius: 8px;
`;

export default StyledView;
