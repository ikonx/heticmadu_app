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

  return (
    <StyledFormik
      initialValues={initialValue}
      validate={(values) => {
        const errors = {};
        setisAvailableState(!isAvailableState);
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(JSON.stringify(values, null, 2));
        setTimeout(() => {
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ handleSubmit, values }) => (
        <StyledContainerForm>
          {dataInput.map((input: any, index: number) => {
            return (
              <>
                <InputLoginBlock
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  label={input.label}
                  required={input.required}
                  inputType={input.type}
                  value={values[input.key]}
                />
                <Spacer size={16} />
              </>
            );
          })}
          <Spacer size={8} />
          <Buttons
            onPress={handleSubmit}
            disabled={isAvailableState}
            variant={TouchableType.FULLWIDTH}
            style={{
              justifyContent: 'center',
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
