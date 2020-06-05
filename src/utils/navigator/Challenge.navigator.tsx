import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import styled from 'styled-components';
import Colors from '@styleGuide/Colors';
import ChallengeList from '@components/screens/ChallengeList/ChallengeList';
import ChallengeDetails from '@components/screens/ChallengeDetails/ChallengeDetails';
import { TouchableType } from '@components/atoms/Buttons/Buttons.enum';
import Icon from '@components/atoms/Icons/Icon';
import { IconName } from '@assets/icons/IconName.enum';
import { Direction } from '@components/atoms/Icons/Chevron/Chevron.style';
import Buttons from '@components/atoms/Buttons/Buttons';

interface Props {}

const ChallengeStack = createStackNavigator();

const StyledButton = styled(Buttons)`
  margin-left: auto;
  margin-right: 16px;
  width: 40px;
`;

const ChallengeNavigator: FunctionComponent<Props> = () => {
  return (
    <ChallengeStack.Navigator mode="modal">
      <ChallengeStack.Screen
        name="List"
        component={ChallengeList}
        options={ ({ navigation }) => ({
          cardStyle: {
            backgroundColor: Colors.mainWhite,
          },
          title: '',
          headerStyle: {
            elevation: 0,
            backgroundColor: Colors.mainRed,
            shadowOpacity: 0,
          },
          headerRight: () => (
            <StyledButton variant={TouchableType.ICON} onPress={() => navigation.goBack()}>
              <Icon
                height={24}
                width={24}
                name={IconName.CROSS}
                direction={Direction.LEFT}
                fill={Colors.mainGrey}
              />
            </StyledButton>
          ),
        })}
      />
      <ChallengeStack.Screen
        name="Details"
        component={ChallengeDetails}
        options={ ({ navigation }) => ({
          cardStyle: {
            backgroundColor: Colors.mainWhite,
          },
          title: '',
          headerStyle: {
            shadowOpacity: 0,
            elevation: 0,
          },
          headerLeft: () => (
            <StyledButton
              variant={TouchableType.ICON}
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 16 }}
            >
              <Icon
                height={24}
                width={24}
                name={IconName.CHEVRON}
                direction={Direction.LEFT}
                fill={Colors.mainGrey}
              />
            </StyledButton>
          ),
        })}
      />
    </ChallengeStack.Navigator>
  );
};

export default ChallengeNavigator;
