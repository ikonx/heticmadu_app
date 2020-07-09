import React, { FunctionComponent, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

import Colors from '@styleGuide/Colors';
import { ProfileEditContainer } from '@components/screens/ProfileEdit/ProfileEdit.style';
import { TouchableType } from '@components/atoms/Buttons/Buttons.enum';
import Avatar from '@components/atoms/Avatar/Avatar';
import Buttons from '@components/atoms/Buttons/Buttons';
import Text from '@components/atoms/Typography/Text/Text';
import Spacer from '@components/atoms/Spacer/Spacer';
import Forms from '@components/organisms/Forms/Forms';
import UserContext from '@src/contexts/user/user.context';

interface Props {}

const data = [
  {
    label: 'Prénom',
    type: 'text',
    required: false,
    key: 'firstName',
  },
  {
    label: 'Nom',
    type: 'text',
    required: false,
    key: 'lastName',
  },
  {
    label: 'Email',
    type: 'text',
    required: false,
    key: 'email',
  },
];

const ProfileEdit: FunctionComponent<Props> = () => {
  const navigation = useNavigation();

  const {
    user: { firstName, lastName, email, picture, id },
    logout,
    updateUserAccount,
  } = useContext(UserContext);
  const onLogout = () => {
    logout();
  };
  const updateProfileImg = async (img: string) => {
    await updateUserAccount({
      id,
      firstName,
      lastName,
      email,
      picture: img,
    }).then((res: any) => {
      res.status === 200 && navigation.navigate('Profile');
    });

  };
  const submit = async (values: any) => {
    await updateUserAccount({
      id,
      picture,
      lastName: values.lastName,
      firstName: values.firstName,
      email: values.email,
    }).then((response: any) => {
      if (response.status === 200) {
        navigation.goBack();
      }
    });
  };

  return (
    <ProfileEditContainer>
      <Avatar
        source={picture || 'https://picsum.photos/200/300'}
        onUpdate={(text: string) => updateProfileImg(text)}
      />
      <Spacer size={24} />
      <Forms
        dataInput={data}
        buttonName="Enregistrer"
        initialValue={{
          firstName,
          lastName,
          email,
        }}
        onSubmit={submit}
      />
      <Spacer size={24} />
      <Buttons
        variant={TouchableType.INVERT}
        style={{ backgroundColor: Colors.mainBackground }}
        onPress={onLogout}
      >
        <Text variant="button" color={Colors.mainRed}>
          Déconnexion
        </Text>
      </Buttons>
    </ProfileEditContainer>
  );
};

export default ProfileEdit;
