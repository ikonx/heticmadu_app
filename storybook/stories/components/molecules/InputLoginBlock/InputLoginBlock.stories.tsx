import React, { FunctionComponent } from 'react';
import InputLoginBlock from '@components/molecules/InputLoginBlock/InputLoginBlock';
import Spacer from '@components/atoms/Spacer/Spacer';

interface Props {}

const InputLoginBlockStories: FunctionComponent<Props> = () => {
  return (
    <>
      <InputLoginBlock inputType="default">Email</InputLoginBlock>
      <Spacer size={24} />
      <InputLoginBlock inputType="password">Mot de passe</InputLoginBlock>
      <Spacer size={24} />
      <InputLoginBlock inputType="action">Action</InputLoginBlock>
    </>
  );
};

export default InputLoginBlockStories;
