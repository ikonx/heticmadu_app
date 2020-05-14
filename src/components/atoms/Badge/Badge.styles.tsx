import styled from 'styled-components';
import { View, Text } from 'react-native';

const StyledBadge = styled(View)`
  font-size: 12px;
  line-height: 16px;
  align-self: center;
  padding: 4px 8px;
  border-radius: 47px;
  max-height: 24px;
`;

export const StyledBadgeText = styled(Text)`
  color: inherit;
`;

export default StyledBadge;
