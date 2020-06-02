import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';
import Theme from '@src/styleGuide/Theme';

const StyledAvatarTouchable = styled(TouchableOpacity)`
  width: 88px;
  height: 88px;
  border-radius: 100px;
  border: ${Theme.Borders.avatarBorder};
  justify-content: center;
  align-items: center;
`;

export default StyledAvatarTouchable;
