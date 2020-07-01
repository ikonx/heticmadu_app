import React, { FunctionComponent, useContext, useState } from 'react';
import { Formik } from 'formik';
import styled, { ThemeContext } from 'styled-components';
import { View } from 'react-native';

import InputLoginBlock from '@src/components/molecules/InputLoginBlock/InputLoginBlock';
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
      onSubmit={(values: any) => console.log('values', values)}
      validate={(values) => {
        const errors: any = {};
        dataInput.map((field: any) => {
          if (!values[field.key]) {
            errors[field.key] = 'Required';
          } else if (field.pattern && !field.pattern.test(values[field.key])) {
            errors[field.key] = `Invalid ${field.key} field`;
          }
        });

        // if (!values.lastName) {
        //   errors.lastName = 'Required';
        // } else if (values.lastName.length > 20) {
        //   errors.lastName = 'Must be 20 characters or less';
        // }
        Object.keys(errors).length === 0
          ? setisAvailableState(true)
          : setisAvailableState(false);
        console.log('rreors', errors);
        setErrors(errors);
        return errors;
      }}
    >
      {({ handleChange, handleSubmit, values }) => (
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
                />
                {errors[input.key] && <Text>{errors[input.key]}</Text>}
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
