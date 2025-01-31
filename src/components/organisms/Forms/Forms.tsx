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
    pattern?: string | any;
  }[];
  buttonName: string;
  initialValue: any;
  onSubmit: (values: any) => void;
}

const StyledFormik = styled(Formik)`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  onSubmit,
}) => {
  const { Colors } = useContext(ThemeContext);

  // All queries for actions on this form
  const [isAvailableState, setisAvailableState] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  return (
    <StyledFormik
      initialValues={initialValue}
      onSubmit={(values: any) => {
        console.log('values', values);
        const errors: any = {};
        dataInput.forEach((field: any) => {
          if (!values[field.key]) {
            errors[field.key] = `Requiert ${field.label}`;
          } else if (field.pattern && !field.pattern.test(values[field.key])) {
            errors[field.key] = `Le champ ${field.key} est invalide`;
          }
        });
        setErrors(errors);
        Object.keys(errors).length === 0 && onSubmit(values);
        return errors;
      }}
      validate={(values: { [key: string]: string }) => {
        dataInput.forEach((field: any) => {
          !values[field.key]
            ? setisAvailableState(false)
            : setisAvailableState(true);
        });
      }}
    >
      {({ handleChange, handleSubmit }) => (
        <StyledContainerForm>
          {dataInput.map((input: any) => {
            return (
              <React.Fragment key={input.key}>
                <InputLoginBlock
                  label={input.label}
                  required={input.required}
                  inputType={input.type}
                  defaultValue={initialValue[input.key]}
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
              </React.Fragment>
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
