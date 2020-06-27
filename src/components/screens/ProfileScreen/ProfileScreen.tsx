import React, { FunctionComponent, useState } from 'react';
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';
import Colors from '@styleGuide/Colors';
import IllustrationName from '@assets/illustrations/IllustrationName.enum';
import { IconName } from '@assets/icons/IconName.enum';
import { TouchableType } from '@components/atoms/Buttons/Buttons.enum';
import Icon from '@components/atoms/Icons/Icon';
import { Direction } from '@components/atoms/Icons/Chevron/Chevron.style';
import {
  ProfileItem, ProfileList,
  ProfileParams,
  ProfileScreenContainer,
  ProfileScreenHeader,
} from '@components/screens/ProfileScreen/ProfileScreen.style';
import Spacer from '@components/atoms/Spacer/Spacer';
import Profile from '@components/molecules/Profile/Profile';
import ChallengeBadge from '@components/molecules/ChallengeBadge/ChallengeBadge';
import Tabs from '@components/molecules/Tabs/Tabs';
import Title from '@components/atoms/Typography/Title/Title';
import { ProfileBadgeModel } from '@utils/models/profileBadge.model';
import { View } from 'react-native';

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const profileTabs = [
  {
    label: 'Badges',
    value: 'badges',
  },
  {
    label: 'Classement',
    value: 'rankings',
  },
];

const profileData: ProfileBadgeModel[] = [
  {
    illustration: IllustrationName.ENERGIE,
    text: 'Master de l\'energie',
    count: 1,
    color: Colors.mainRed,
  },
  {
    illustration: IllustrationName.CUISINE,
    text: 'Chef cuisinier',
    count: 0,
    color: Colors.secondaryGrey,
  },
  {
    illustration: IllustrationName.MAISON,
    text: 'Maison verte',
    count: 1,
    color: Colors.mainOrange,
  },
  {
    illustration: IllustrationName.RECYCLAGE,
    text: 'Recycleur de l\'extrême',
    count: 1,
    color: Colors.mainPurple,
  },
];

const ProfileScreen: FunctionComponent<Props> = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState(0);
  const updateTab = () => {
    setActiveTab(activeTab === 0 ? 1 : 0);
  };

  return (
    <ProfileScreenContainer>
      <ProfileScreenHeader>
        <ProfileParams variant={TouchableType.ICON} onPress={() => navigation.goBack()}>
          <Icon
            height={24}
            width={24}
            name={IconName.SETTINGS}
            direction={Direction.LEFT}
            fill={Colors.mainGrey}
          />
        </ProfileParams>
      </ProfileScreenHeader>
      <Spacer size={24}/>
      <Profile
        title="John Doe"
        text="7 Défi réalisés"
      />
      <Spacer size={24}/>
      <View>
        <Tabs
          data={profileTabs}
          onClick={updateTab}
          activeTab={profileTabs[activeTab]}
          columns={profileTabs.length}
        />
      </View>
      <ProfileList
        data={profileData}
        renderItem={({ item }: { item: ProfileBadgeModel }) => (
          <ProfileItem flexDirection="column">
            <ChallengeBadge
              illustration={item.illustration}
              background={item.color}
              count={item.count}
            />
            <Spacer size={8}/>
            <Title variant="subtitle">{item.text}</Title>
          </ProfileItem>
        )}
        keyExtractor={ (item: ProfileBadgeModel) => item.text }
        numColumns={2}
        ItemSeparatorComponent={() => <Spacer size={24}/>}
        ListFooterComponent={() => (
          <>
            <Spacer size={24} />
            <Spacer size={24} />
          </>
        )}
      />
    </ProfileScreenContainer>
  );
};

export default ProfileScreen;
