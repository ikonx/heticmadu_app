import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';

export const StyledContainer = styled(TouchableOpacity)<{ isActive?: boolean }>`
  align-items: center;
  justify-content: center;
  flex: 1;
`;
