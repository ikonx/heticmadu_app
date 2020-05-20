import styled from 'styled-components';
import { TouchableOpacity, View } from 'react-native';
import React from 'react';

export const TabItemContainer = styled(TouchableOpacity)`
  width: auto;
  align-items: center;
  opacity: ${({ disabled }) => (disabled ? 0.32 : 1)};
`;

export const TabItemBorder = styled(View)`
  width: 100%;
  height: 1px;
  background: ${({ isDisabled, theme }) =>
    isDisabled ? theme.Colors.secondaryGrey : theme.Colors.darknessBlue};
  margin-top: 8px;
`;

export const TabItemText = styled(View)`
  padding: 16px 16px 8px 16px;
`;
