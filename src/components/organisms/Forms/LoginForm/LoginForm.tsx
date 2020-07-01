import React, {
  FunctionComponent,
  useContext,
  useState,
  useEffect,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { View } from 'react-native';

import InputLoginBlock from '@src/components/molecules/InputLoginBlock/InputLoginBlock';
import Spacer from '@src/components/atoms/Spacer/Spacer';
import Buttons from '@src/components/atoms/Buttons/Buttons';
import Text from '@components/atoms/Typography/Text/Text';
import { TouchableType } from '@src/components/atoms/Buttons/Buttons.enum';

interface ILoginForm {
  disableBtn: boolean;
}

const StyledBlockForm = styled(View)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;

const LoginForm: FunctionComponent<ILoginForm> = () => {
  const { Colors } = useContext(ThemeContext);

  // All queries for actions on this form
  const [queryState, setQueryState] = useState({
    availableButton: false,
    connected: false,
  });

  // State of all input field
  const [inputsState, setInputsState] = useState({
    input1: null,
    input2: null,
  });

  // Effect to check if we can activate button
  useEffect(() => {
    if (inputsState.input1 && inputsState.input2) {
      const newQueries = { ...queryState };
      newQueries.availableButton = true;
      setQueryState(newQueries);
    }
  }, [inputsState.input1, inputsState.input2]);

  return (
    <StyledBlockForm>
      <InputLoginBlock label="Email" inputType="default" />
      <Spacer size={16} />
      <InputLoginBlock label="Mot de passe" inputType="password" />
      <Spacer size={24} />
      <Buttons
        disabled={!queryState.availableButton}
        variant={TouchableType.FULLWIDTH}
        style={{
          justifyContent: 'center',
        }}
      >
        <Text variant="button" color={Colors.mainWhite} isBold>
          Se connecter
        </Text>
      </Buttons>
    </StyledBlockForm>
  );
};

export default LoginForm;
