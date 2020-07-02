import React, { FunctionComponent, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';
import Colors from '@styleGuide/Colors';
import { IconName } from '@assets/icons/IconName.enum';
import { ProfileBadgeModel } from '@utils/models/profileBadge.model';
import { ProfileLeaderboardModel } from '@utils/models/profileLeaderboard.model';
import { leaderboardData, profileData, profileTabs } from '@utils/mocks/profile.data';
import { TouchableType } from '@components/atoms/Buttons/Buttons.enum';
import Icon from '@components/atoms/Icons/Icon';
import { Direction } from '@components/atoms/Icons/Chevron/Chevron.style';
import Spacer from '@components/atoms/Spacer/Spacer';
import Profile from '@components/molecules/Profile/Profile';
import ChallengeBadge from '@components/molecules/ChallengeBadge/ChallengeBadge';
import Tabs from '@components/molecules/Tabs/Tabs';
import Title from '@components/atoms/Typography/Title/Title';
import Separator from '@components/atoms/Separator/Separator';
import LeaderboardRow from '@components/molecules/LeaderboardRow/LeaderboardRow';
import {
  ProfileItem, ProfileList,
  ProfileParams,
  ProfileScreenContainer,
  ProfileScreenHeader,
} from '@components/screens/ProfileScreen/ProfileScreen.style';

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const ProfileScreen: FunctionComponent<Props> = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [mainData, setData] = useState<ProfileBadgeModel[]|ProfileLeaderboardModel[]>(
    profileData,
  );

  const updateTab = () => {
    setData(activeTab === 0 ? leaderboardData : profileData);
    setActiveTab(activeTab === 0 ? 1 : 0);
  };

  return (
    <ProfileScreenContainer>
      <ProfileScreenHeader>
        <ProfileParams variant={TouchableType.ICON} onPress={() => navigation.navigate('Profile')}>
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
        data={mainData}
        renderItem={
          ({ item, index }: {
            item: ProfileBadgeModel&ProfileLeaderboardModel,
            index: number,
          }) => {
            return activeTab === 0 ? (
                <ProfileItem flexDirection="column">
                    <TouchableOpacity onPress={() => navigation.navigate('Coupon')}>
                        <ChallengeBadge
                            illustration={item.illustration}
                            background={item.color}
                            count={item.count}
                        />
                        <Spacer size={8}/>
                        <Title variant="subtitle">{item.text}</Title>
                    </TouchableOpacity>
                </ProfileItem>
              ) : (
                <>
                  <LeaderboardRow
                    rank={item.rank}
                    name={item.name}
                    text={item.text}
                  />
                  <Spacer size={16} />
                  { leaderboardData.length > index + 1 && (
                    <Separator />
                  )}
                </>
            );
          }
        }
        key={(activeTab === 0 ? 'a' : 'b')}
        keyExtractor={ (item: ProfileBadgeModel) => item.text }
        numColumns={activeTab === 0 ? 2 : 1}
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
