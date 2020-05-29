import styled from 'styled-components';
import { View } from 'react-native';

export const ModalContainer = styled(View)`
  padding: 16px;
  border: ${ ({ theme }) => theme.Borders.lightBorder};
  border-radius: 10px;
  box-shadow: ${ ({ theme }) => theme.Shadow.shadowBottom };
  background-color: ${ ({ theme }) => theme.Colors.mainWhite };
`;

export const ModalTitle = styled(View)`
  margin-bottom: 8px;
`;

export const ModalFooter = styled(View)`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
