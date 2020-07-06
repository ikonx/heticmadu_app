import React, { FunctionComponent } from 'react';
import Colors from '@styleGuide/Colors';
import { ProfileEditContainer } from '@components/screens/ProfileEdit/ProfileEdit.style';
import { TouchableType } from '@components/atoms/Buttons/Buttons.enum';
import Avatar from '@components/atoms/Avatar/Avatar';
import Buttons from '@components/atoms/Buttons/Buttons';
import Text from '@components/atoms/Typography/Text/Text';
import Spacer from '@components/atoms/Spacer/Spacer';
import Forms from '@components/organisms/Forms/Forms';

interface Props {}

const data = [
  {
    label: 'Nom',
    type: 'text',
    required: false,
    key: 'name',
  },
  {
    label: 'Prénom',
    type: 'text',
    required: false,
    key: 'firstName',
  },
  {
    label: 'Email secondaire',
    type: 'text',
    required: false,
    key: 'email',
  },
];

const ProfileEdit: FunctionComponent<Props> = () => {
  return (
    <ProfileEditContainer>
      <Avatar />
      <Spacer size={24}/>
      <Forms
        dataInput={data}
        buttonName="Enregistrer"
        initialValue={{
          name: '',
          firstName: '',
          email: '',
        }}
      />
      <Spacer size={24}/>
      <Buttons variant={TouchableType.INVERT} style={{ backgroundColor: Colors.mainBackground }}>
        <Text variant="button" color={Colors.mainRed}>Déconnexion</Text>
      </Buttons>
    </ProfileEditContainer>
  );
};

export default ProfileEdit;
