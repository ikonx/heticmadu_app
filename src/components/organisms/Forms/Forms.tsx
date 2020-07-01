import React, { FunctionComponent, useContext, useState } from 'react';
import { Formik } from 'formik';
import styled, { ThemeContext } from 'styled-components';
import { View } from 'react-native';

import InputLoginBlock from '@src/components/molecules/InputFormBlock/InputFormBlock';
import Buttons from '@src/components/atoms/Buttons/Buttons';
import Text from '@src/components/atoms/Typography/Text/Text';
import Spacer from '@src/components/atoms/Spacer/Spacer';
import { TouchableType } from '@src/components/atoms/Buttons/Buttons.enum';

interface IForms {
  dataInput: {
    label: string;
    type: string;
    required: boolean;
    key: string;
    pattern?: string;
  }[];
  buttonName: string;
  initialValue: any;
}

const StyledFormik = styled(Formik)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;

const StyledContainerForm = styled(View)`
  align-items: center;
  width: 100%;
`;

const Forms: FunctionComponent<IForms> = ({
  dataInput,
  buttonName,
  initialValue,
}) => {
  const { Colors } = useContext(ThemeContext);

  // All queries for actions on this form
  const [isAvailableState, setisAvailableState] = useState(false);
  const [errors, setErrors] = useState({});

  return (
    <StyledFormik
      initialValues={initialValue}
      onSubmit={(values: any) => {
        console.log('values', values);
        const errors: any = {};
        dataInput.map((field: any) => {
          if (!values[field.key]) {
            errors[field.key] = `Requiert ${field.label}`;
          } else if (field.pattern && !field.pattern.test(values[field.key])) {
            errors[field.key] = `Le champ ${field.key} est invalide`;
          }
        });
        setErrors(errors);
        return errors;
      }}
      validate={(values) => {
        dataInput.map((field: any) => {
          !values[field.key]
            ? setisAvailableState(false)
            : setisAvailableState(true);
        });
      }}
    >
      {({ handleChange, handleSubmit }) => (
        <StyledContainerForm>
          {dataInput.map((input: any, index: number) => {
            return (
              <>
                <InputLoginBlock
                  key={index}
                  label={input.label}
                  required={input.required}
                  inputType={input.type}
                  defaultValue={input.value}
                  onInputValueChange={handleChange(input.key)}
                  errors={errors[input.key]}
                />
                {errors[input.key] && (
                  <>
                    <Spacer size={4} />
                    <Text
                      variant="error"
                      color={Colors.mainRed}
                      style={{ width: '85%' }}
                    >
                      {errors[input.key]}
                    </Text>
                  </>
                )}
                <Spacer size={16} />
              </>
            );
          })}
          <Spacer size={8} />
          <Buttons
            onPress={handleSubmit}
            disabled={!isAvailableState}
            variant={TouchableType.FULLWIDTH}
            style={{
              justifyContent: 'center',
              maxHeight: 56,
              height: 56,
            }}
          >
            <Text variant="button" color={Colors.mainWhite} isBold>
              {buttonName}
            </Text>
          </Buttons>
        </StyledContainerForm>
      )}
    </StyledFormik>
  );
};

export default Forms;
