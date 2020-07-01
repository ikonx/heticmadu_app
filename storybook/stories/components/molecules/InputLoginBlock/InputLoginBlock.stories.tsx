import React, { FunctionComponent } from 'react';
import InputLoginBlock from '@components/molecules/InputLoginBlock/InputLoginBlock';
import Spacer from '@components/atoms/Spacer/Spacer';

interface Props {}

const InputLoginBlockStories: FunctionComponent<Props> = () => {
  return (
    <>
      <InputLoginBlock inputType="default" label="Email" />
      <Spacer size={24} />
      <InputLoginBlock inputType="password" label="Mot de passe" />
      <Spacer size={24} />
      <InputLoginBlock inputType="action" label="Action"/>
    </>
  );
};

export default InputLoginBlockStories;
