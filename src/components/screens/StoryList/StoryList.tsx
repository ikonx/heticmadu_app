import React, { FunctionComponent } from 'react';
import { FlatList } from 'react-native';
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';
import Colors from '@styleGuide/Colors';
import { IconName } from '@assets/icons/IconName.enum';
import { TouchableType } from '@components/atoms/Buttons/Buttons.enum';
import Icon from '@components/atoms/Icons/Icon';
import { Direction } from '@components/atoms/Icons/Chevron/Chevron.style';
import {
  StoryListContainer,
  StyledButton,
  StyledContent,
  StyledHeader,
  StyledHeaderText,
} from '@components/screens/StoryList/StoryList.style';
import TagsList from '@components/molecules/TagsList/TagsList';
import Title from '@components/atoms/Typography/Title/Title';
import Text from '@components/atoms/Typography/Text/Text';
import Spacer from '@components/atoms/Spacer/Spacer';
import Illustration from '@components/atoms/Illustrations/Illustration';
import IllustrationName from '@assets/illustrations/IllustrationName.enum';
import ChallengeRow from '@components/molecules/ChallengeRow/ChallengeRow';
import { StoryListData } from '@utils/mocks/storyList.data';

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const StoryList: FunctionComponent<Props> = ({ navigation }) => {
  return (
    <StoryListContainer>
      <StyledButton variant={TouchableType.ICON} onPress={() => navigation.goBack()}>
        <Icon
          height={24}
          width={24}
          name={IconName.CROSS}
          direction={Direction.LEFT}
          fill={Colors.mainGrey}
        />
      </StyledButton>
      <StyledHeader>
        <StyledHeaderText>
          <TagsList />
          <Spacer size={16} />
          <Title variant="h4" color={Colors.mainWhite} isBold>Toutes ses fournitures</Title>
          <Spacer size={8} />
          <Text
            color={Colors.mainWhite}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </StyledHeaderText>
        <Illustration name={IllustrationName.ENERGIE} />
      </StyledHeader>
      <StyledContent>
        <Spacer size={24} />
        <Title variant="h4" isBold>Catégorie</Title>
        <Spacer size={24} />
        <FlatList
          data={StoryListData}
          renderItem={ ({ item }) => (
            <ChallengeRow
              text={item.text}
              icon={item.icon}
              clickEvent={item.clickEvent}
              color={item.color}
            />
          )}
          keyExtractor={ item => item.id }
          ListFooterComponent={() => <Spacer size={24} />}
          ItemSeparatorComponent={() => <Spacer size={16}/>}
        />
    </StyledContent>
    </StoryListContainer>
  );
};

export default StoryList;
