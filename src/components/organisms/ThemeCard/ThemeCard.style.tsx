import styled from 'styled-components';
import { View } from 'react-native';

export const CardContainer = styled(View)<{ background?: string }>`
  flex-direction: row;
  background: ${ ({ background, theme }) => background ? background : theme.Colors.mainWhite };
  padding: 24px;
  border: ${ ({ theme }) => theme.Borders.mainBorder };
  border-radius: 12px;
`;

export const CardLeft = styled(View)`
  width: 75%;
`;

export const CardTitle = styled(View)`
  margin: 8px 0;
`;
