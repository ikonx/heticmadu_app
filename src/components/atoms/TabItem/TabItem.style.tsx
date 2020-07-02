import styled from 'styled-components';
import { TouchableOpacity, View, Dimensions } from 'react-native';

export const TabItemContainer = styled(TouchableOpacity)<{ columns?: number }>`
  width: ${ ({ columns }) => columns ? `${Dimensions.get('window').width / columns}px` : 'auto'};
  align-items: center;
  opacity: ${({ disabled }) => (disabled ? 0.32 : 1)};
`;

export const TabItemBorder = styled(View)`
  width: 100%;
  height: 1px;
  background: ${({ isDisabled, theme }) =>
    isDisabled ? theme.Colors.secondaryGrey : theme.Colors.darknessBlue};
`;

export const TabItemText = styled(View)`
  padding: 16px 16px 8px 16px;
`;
