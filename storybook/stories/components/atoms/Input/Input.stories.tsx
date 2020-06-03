import React, { ChangeEvent, FunctionComponent, useState } from 'react';
import Input from '@components/atoms/Input/Input';

interface Props {}

const InputStories: FunctionComponent<Props> = () => {
  const [inputValue, setInputValue] = useState('');
  const changeEvent = (event: ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value);

  return (
    <Input
      onChange={(e) => changeEvent(e)}
      defaultValue={inputValue}
    />
  );
};

export default InputStories;
