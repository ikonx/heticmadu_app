import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
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
  onPress: (poi: PoiModel) => () => void;
  onPressGreenscore?: () => void;
}

const StyledImage = styled(Image)`
  background: ${({ theme }) => theme.Colors.secondaryGrey};
  height: 130px;
  width: 100%;
  border-radius: 4px;
`;

const StyledPoiCard = styled(TouchableOpacity)`
  height: 250px;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '240px')};
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
  poi,
  gotBorder,
  fullWidth,
  onPress,
  onPressGreenscore,
}: Props) => {
  const { name, address, greenScore, averagePrice, images } = poi;
  return (
    <StyledPoiCard
      gotBorder={gotBorder}
      fullWidth={fullWidth}
      onPress={onPress(poi)}
    >
      <List flexDirection="column">
        <StyledImage
          source={{
            uri: images
              ? images[0]
              : `https://source.unsplash.com/900x90${greenScore}/?food`,
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
          <Badge.GreenScore score={greenScore} onClick={onPressGreenscore} />
          <Spacer size={8} />
          <Badge.Price price={averagePrice} />
        </List>
      </List>
    </StyledPoiCard>
  );
};

PoiCard.defaultProps = {
  onPress: (poi: PoiModel) => () => {},
};

export default PoiCard;
