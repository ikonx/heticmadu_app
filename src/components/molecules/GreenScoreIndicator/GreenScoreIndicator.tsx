import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import { IndicatorCircle, StyledList } from './GreenScoreIndicator.style';
import Text from '@components/atoms/Typography/Text/Text';
import Spacer from '@components/atoms/Spacer/Spacer';
import Colors from '@styleGuide/Colors';

interface Props {
  title: string;
  text: string;
  color: string|number;
}

const GreenScoreIndicator: FunctionComponent<Props> = ({ title, text, color }) => {
  return (
    <View>
      <Text isBold>{ title }</Text>
      <Spacer size={8}/>
      <StyledList>
        <IndicatorCircle
          background={color}
          style={{ borderRadius: 50 }}
        />
        <Spacer size={8}/>
        <Text color={Colors.mainGrey}>{ text }</Text>
      </StyledList>
    </View>
  );
};

export default GreenScoreIndicator;
