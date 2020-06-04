import React, { useContext, useState } from 'react';
import Icon from '@components/atoms/Icons/Icon';
import { IconName } from '@assets/icons/IconName.enum';
import Input from '@components/atoms/Input/Input';
import { ThemeContext } from 'styled-components';
import { debounce } from 'throttle-debounce';
import StyledSearchInput from './SearchInput.style';

interface Props {
  onSearch: (value: string) => void;
  value: string;
}

const SearchInput = ({ onSearch, value }: Props) => {
  const [isFocus, setFocus] = useState(false);
  const { Colors } = useContext(ThemeContext);

  const focusHanlder = () => setFocus(!isFocus);

  const changeTextHanlder = debounce(300, (text: string) => {
    onSearch(text);
  });

  return (
    <StyledSearchInput>
      <Icon
        height={24}
        width={24}
        name={IconName.SEARCH}
        fill={isFocus ? Colors.darknessBlue : Colors.mainGrey}
        style={{ marginRight: 4 }}
      />
      <Input
        onFocus={focusHanlder}
        onBlur={focusHanlder}
        onChangeText={changeTextHanlder}
        defaultValue={value}
      />
    </StyledSearchInput>
  );
};

SearchInput.defaultProps = {
  onSearch: () => {},
  value: '',
};

export default SearchInput;
