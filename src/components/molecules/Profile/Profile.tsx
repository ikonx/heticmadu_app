import React, { FunctionComponent, useContext, useEffect } from 'react';
import { ProfileContainer } from './Profile.style';
import Text from '@components/atoms/Typography/Text/Text';
import Title from '@components/atoms/Typography/Title/Title';
import Colors from '@styleGuide/Colors';
import Spacer from '@components/atoms/Spacer/Spacer';
import Avatar from '@components/atoms/Avatar/Avatar';
import UserContext from '@src/contexts/user/user.context';

interface Props {
  title: string;
  text: string;
  avatar?: string;
}

const Profile: FunctionComponent<Props> = ({ title, text, avatar }) => {
  const { getUserAccount } = useContext(UserContext);

  useEffect(() => {
    getUserAccount();
  }, []);

  return (
    <ProfileContainer>
      <Avatar source={avatar ? avatar : 'https://picsum.photos/200/300'} />
      <Spacer size={8} />
      <Title variant="h2" isBold>
        {title}
      </Title>
      <Spacer size={8} />
      <Text variant="label" color={Colors.mainGrey} isBold>
        {text}
      </Text>
    </ProfileContainer>
  );
};

export default Profile;
