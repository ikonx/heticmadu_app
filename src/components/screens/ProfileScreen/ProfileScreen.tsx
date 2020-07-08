// @ts-nocheck
/* tslint:disable */
import React, { FunctionComponent, useState, useContext } from 'react';
import {
    View,
    Animated,
    Dimensions,
    StyleSheet,
    Button,
    Text, TouchableOpacity,
} from 'react-native';
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
    AnimatedValue,
    SafeAreaView,
} from 'react-navigation';
import Colors from '@styleGuide/Colors';
import { IconName } from '@assets/icons/IconName.enum';
import { ProfileBadgeModel } from '@utils/models/profileBadge.model';
import { ProfileLeaderboardModel } from '@utils/models/profileLeaderboard.model';
import {
    leaderboardData,
    profileData,
    profileTabs,
} from '@utils/mocks/profile.data';
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
    ProfileItem,
    ProfileList,
    ProfileParams,
    ProfileScreenContainer,
    ProfileScreenHeader,
} from '@components/screens/ProfileScreen/ProfileScreen.style';
import UserContext from '@src/contexts/user/user.context';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const ProfileScreen: FunctionComponent<Props> = ({ navigation }) => {
    const { user } = useContext(UserContext);

    const [activeTab, setActiveTab] = useState(1);
    const [mainData, setData] = useState<
        ProfileBadgeModel[] | ProfileLeaderboardModel[]
        >(leaderboardData);
    const updateTab = () => {
        setData(activeTab === 0 ? leaderboardData : profileData);
        setActiveTab(activeTab === 0 ? 1 : 0);
    };

    const animatedValue: AnimatedValue = new Animated.Value(0);
    const MAX_SCROLL = Dimensions.get('window').height / 3;
    const headerTranslateY = animatedValue.interpolate({
        inputRange: [0, 100],
        outputRange: [0, -100],
        extrapolate: 'clamp',
    });

    const iconTranslateY = animatedValue.interpolate({
        inputRange: [0, 100],
        outputRange: [44, 144],
        extrapolate: 'clamp',
    });

    const avatarScale = animatedValue.interpolate({
        inputRange: [0, 100],
        outputRange: [1, 0.7],
        extrapolate: 'clamp',
    });

    return (
        <ProfileScreenContainer>
            <Animated.View
                style={[
                    {
                        ...StyleSheet.absoluteFillObject,
                        zIndex: 1,
                        bottom: 'auto',
                        backgroundColor: 'white',
                        transform: [{ translateY: headerTranslateY }],
                    },
                ]}
            >
                {/* <SafeAreaView forceInset={{ bottom: 'never', top: 'never' }}> */}
                <ProfileScreenHeader
                    style={[
                        {
                            zIndex: 2,
                            transform: [{ translateY: iconTranslateY }],
                        },
                    ]}
                >
                    <ProfileParams
                        variant={TouchableType.ICON}
                        onPress={() => navigation.navigate('Profile', { screen: 'Edit' })}
                    >
                        <Icon
                            height={24}
                            width={24}
                            name={IconName.SETTINGS}
                            direction={Direction.LEFT}
                            fill={Colors.mainGrey}
                        />
                    </ProfileParams>
                </ProfileScreenHeader>
                {/* </SafeAreaView> */}
                <Animated.View
                    style={[
                        {
                            transform: [
                                {
                                    translateY: animatedValue.interpolate({
                                        inputRange: [0, 100],
                                        outputRange: [0, 50],
                                        extrapolate: 'clamp',
                                    }),
                                },
                                {
                                    scale: avatarScale,
                                },
                            ],
                        },
                    ]}
                >
                    <Spacer size={24} />
                    <Profile
                        title={`${user.firstName} ${user.lastName}`}
                        text="7 Défi réalisés"
                        avatar={user.picture}
                    />
                </Animated.View>
                <Spacer size={24} />
                <View>
                    <Tabs
                        data={profileTabs}
                        onClick={updateTab}
                        activeTab={profileTabs[activeTab]}
                        columns={profileTabs.length}
                    />
                </View>
            </Animated.View>
            <ProfileList
                contentContainerStyle={{
                    paddingTop: MAX_SCROLL,
                }}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [
                        {
                            nativeEvent: { contentOffset: { y: animatedValue } },
                        },
                    ],
                    { useNativeDriver: true },
                )}
                data={mainData}
                renderItem={({
                                 item,
                                 index,
                             }: {
                    item: ProfileBadgeModel & ProfileLeaderboardModel;
                    index: number;
                }) => {
                    return activeTab === 0 ? (
                        <ProfileItem flexDirection="column">
                            <TouchableOpacity onPress={() => navigation.navigate('Profile', { screen: 'Coupon', params: { item: item } })}>
                                <ChallengeBadge
                                    illustration={item.illustration}
                                    background={item.color}
                                    count={item.count}
                                />
                                <Spacer size={8} />
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
                            {leaderboardData.length > index + 1 && <Separator />}
                        </>
                    );
                }}
                key={activeTab === 0 ? 'a' : 'b'}
                keyExtractor={(item: ProfileBadgeModel) => item.text}
                numColumns={activeTab === 0 ? 2 : 1}
                ItemSeparatorComponent={() => <Spacer size={24} />}
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
