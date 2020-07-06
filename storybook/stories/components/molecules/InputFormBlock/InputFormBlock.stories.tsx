import React, { FunctionComponent } from 'react';
import InputFormBlock from '@components/molecules/InputFormBlock/InputFormBlock';
import Spacer from '@components/atoms/Spacer/Spacer';

interface Props {}

const InputFormBlockStories: FunctionComponent<Props> = () => {
  return (
    <>
      <InputFormBlock inputType="default" label="Email" />
      <Spacer size={24} />
      <InputFormBlock inputType="password" label="Mot de passe" />
      <Spacer size={24} />
      <InputFormBlock inputType="action" label="Action"/>
    </>
  );
};

export default InputFormBlockStories;
