import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import SnackBar from '@components/molecules/SnackBar/SnackBar';
import Spacer from '@components/atoms/Spacer/Spacer';

interface Props {}

const StyledContainer = styled(View)`
  margin: 0 40px;
`;

const SnackBarStories: FunctionComponent<Props> = () => {
  return (
    <StyledContainer>
      <SnackBar
        title="Mail envoyé"
        text="Un lien de réinitialisation vous a été envoyer ! Checker vos mails :)"
      />
      <Spacer size={24}/>
      <SnackBar
        title="La connexion à échoué"
        text="Erreur ! L’adresse e-mail ou le mot de passe est incorrect"
        isError
      />
    </StyledContainer>
  );
};

export default SnackBarStories;
