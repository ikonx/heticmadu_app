import React, { FunctionComponent } from 'react';
import LogoutModal from '@components/molecules/LogoutModal/LogoutModal';

interface Props {}

const LogoutModalStories: FunctionComponent<Props> = () => {
  return (
    <LogoutModal
      title="Déconnexion"
      subtitle="Voulez-vous vraiment vous déconnecter de votre compte ?"
      cancelText="Annuler"
      cancelAction={() => console.log('CANCEL')}
      confirmText="Déconnexion"
      confirmAction={() => console.log('CONFIRM')}
    />
  );
};

export default LogoutModalStories;
