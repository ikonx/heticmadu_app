import React, { ChangeEvent, FunctionComponent, useState } from 'react';
import InputLogin from '@components/atoms/InputLogin/InputLogin';

interface Props {}

const InputLoginStories: FunctionComponent<Props> = () => {
  const [inputValue, setInputValue] = useState('');
  const changeEvent = (event: ChangeEvent<HTMLInputElement>) =>
    setInputValue(event.target.value);

  return (
    <InputLogin onChange={(e) => changeEvent(e)} defaultValue={inputValue} />
  );
};

export default InputLoginStories;
