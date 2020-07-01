import React, { ChangeEvent, FunctionComponent, useState } from 'react';
import InputForm from '@components/atoms/InputForm/InputForm';

interface Props {}

const InputFormStories: FunctionComponent<Props> = () => {
  const [inputValue, setInputValue] = useState('');
  const changeEvent = (event: ChangeEvent<HTMLInputElement>) =>
    setInputValue(event.target.value);

  return (
    <InputForm onChange={(e) => changeEvent(e)} defaultValue={inputValue} />
  );
};

export default InputFormStories;
