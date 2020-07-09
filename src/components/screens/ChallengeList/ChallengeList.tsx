import React, { FunctionComponent } from 'react';
import { FlatList, View } from 'react-native';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import Colors from '@styleGuide/Colors';
import {
  ChallengeListContainer,
  StyledContent,
  StyledHeader,
  StyledHeaderText,
  StyledButton,
} from '@components/screens/ChallengeList/ChallengeList.style';
import TagsList from '@components/molecules/TagsList/TagsList';
import Title from '@components/atoms/Typography/Title/Title';
import Text from '@components/atoms/Typography/Text/Text';
import Spacer from '@components/atoms/Spacer/Spacer';
import Illustration from '@components/atoms/Illustrations/Illustration';
import IllustrationName from '@assets/illustrations/IllustrationName.enum';
import ChallengeRow from '@components/molecules/ChallengeRow/ChallengeRow';
import { ChallengeListData } from '@utils/mocks/challengeList.data';
import { TouchableType } from '@components/atoms/Buttons/Buttons.enum';
import Icon from '@components/atoms/Icons/Icon';
import { IconName } from '@assets/icons/IconName.enum';
import { Direction } from '@components/atoms/Icons/Chevron/Chevron.style';

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const ChallengeList: FunctionComponent<Props> = ({ navigation }) => {
  const onClick = () => {
    navigation.navigate('Details');
  };

  return (
    <ChallengeListContainer>
      <View style={{ backgroundColor: Colors.mainGreen, paddingBottom: 24 }}>
        <StyledButton
          variant={TouchableType.ICON}
          onPress={() => navigation.goBack()}
        >
          <Icon
            height={24}
            width={24}
            name={IconName.CROSS}
            direction={Direction.LEFT}
            fill={Colors.mainGrey}
          />
        </StyledButton>
      </View>
      <StyledHeader>
        <StyledHeaderText>
          <TagsList
            tagsArray={[{ label: '7 Défis' }]}
            selectedTags={[{ label: '7 Défis' }]}
          />
          <Spacer size={16} />
          <Title variant="h4" color={Colors.mainWhite} isBold>
            Toutes ses fournitures
          </Title>
          <Spacer size={8} />
          <Text color={Colors.mainWhite}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </StyledHeaderText>
        <Illustration name={IllustrationName.ENERGIE} />
      </StyledHeader>
      <StyledContent>
        <FlatList
          data={ChallengeListData}
          renderItem={({ item }) => (
            <ChallengeRow
              text={item.text}
              icon={item.icon}
              clickEvent={onClick}
              color={item.color}
            />
          )}
          keyExtractor={(item) => item.id}
          ListFooterComponent={() => <Spacer size={24} />}
          ItemSeparatorComponent={() => <Spacer size={16} />}
          style={{
            paddingTop: 24,
          }}
        />
      </StyledContent>
    </ChallengeListContainer>
  );
};

export default ChallengeList;
