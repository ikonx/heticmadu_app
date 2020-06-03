import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';

export const TagContainer = styled(TouchableOpacity)<{ color?: string }>`
  background: ${({ color, theme }) =>
  color ? color : `${theme.Colors.mainBlack}25`};
  padding: 4px 8px;
  border-radius: 48px;
`;
