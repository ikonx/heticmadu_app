import { Dimensions, FlatList, View } from 'react-native';
import styled from 'styled-components';
import Buttons from '@components/atoms/Buttons/Buttons';
import { SafeAreaView } from 'react-native-safe-area-context';
import List from '@components/atoms/List/List';

export const ProfileScreenContainer = styled(SafeAreaView)`
  background: ${ ({ theme }) => theme.Colors.mainWhite };
  flex: 1;
`;

export const ProfileScreenHeader = styled(View)`
  align-items: flex-end;
  justify-content: flex-end;
  margin: 8px 16px;
`;

export const ProfileParams = styled(Buttons)`
  width: 40px;
  height: 40px;
`;

export const ProfileList = styled(FlatList)`
  padding: 24px 16px 54px;
  width: 100%;
`;

export const ProfileItem = styled(List)`
  margin-right: 24px;
  width: ${ Dimensions.get('window').width / 2 - 32 }px;
`;
