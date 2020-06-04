import React from 'react';
import { TouchableHighlight, Image } from 'react-native';
import styled, { css } from 'styled-components';
import List from '@src/components/atoms/List/List';
import Text from '@src/components/atoms/Typography/Text/Text';
import { PoiModel } from '@src/utils/models/pois.model';
import Badge from '@src/components/atoms/Badge/Badge';
import Spacer from '@src/components/atoms/Spacer/Spacer';

interface Props {
  poi: PoiModel;
  gotBorder?: boolean;
  fullWidth?: boolean;
}

const StyledImage = styled(Image)`
  background: ${({ theme }) => theme.Colors.secondaryGrey};
  height: 130px;
  width: 100%;
  border-radius: 4px;
`;

const StyledPoiCard = styled(TouchableHighlight)`
  height: 250px;
  width: ${ ({ fullWidth }) => fullWidth ? '100%' : '240px'};
  padding: 16px;

  ${({ gotBorder }) =>
    gotBorder &&
    css`
      border: 1px solid #efefef;
      box-shadow: 2px 8px 16px rgba(24, 50, 115, 0.06);
      border-radius: 10px;
      background-color: ${({ theme }) => theme.Colors.mainWhite};
    `}

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
`;

const PoiCard = ({
  poi: { name, address, greenScore, averagePrice, images },
  gotBorder,
  fullWidth,
}: Props) => {
  return (
    <StyledPoiCard gotBorder={gotBorder} fullWidth={fullWidth}>
      <List flexDirection="column">
        <StyledImage
          source={{
            uri: images
              ? images[0]
              : 'https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
          }}
        />
        <Spacer size={8} />
        <Text variant="legendI" isBold numberOfLines={1} ellipsizeMode="tail">
          {name}
        </Text>
        <Text variant="link" numberOfLines={1} ellipsizeMode="tail">
          {address}
        </Text>
        <Spacer size={8} />
        <List>
          <Badge.GreenScore score={greenScore} />
          <Spacer size={8} />
          <Badge.Price price={averagePrice} />
        </List>
      </List>
    </StyledPoiCard>
  );
};

export default PoiCard;
