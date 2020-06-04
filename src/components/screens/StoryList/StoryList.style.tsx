import { View } from 'react-native';
import styled from 'styled-components';
import Buttons from '@components/atoms/Buttons/Buttons';
import { SafeAreaView } from 'react-native-safe-area-context';
import List from '@components/atoms/List/List';

export const StoryListContainer = styled(SafeAreaView)`
  padding: 0;
  flex: 1;
`;

export const StyledButton = styled(Buttons)`
  margin-left: auto;
  margin-right: 16px;
  width: 40px;
  position: absolute;
  top: 16px;
  right: 6px;
  z-index: 3;
`;

export const StyledHeader = styled(List)`
  padding: 80px 20px 24px 16px;
  align-items: center;
  justify-content: space-between;
  background: ${ ({ theme }) => theme.Colors.mainRed };
`;

export const StyledHeaderText = styled(View)`
  flex: 1;
`;

export const StyledContent = styled(View)`
  margin: 0 16px;
  flex: 1;
`;
