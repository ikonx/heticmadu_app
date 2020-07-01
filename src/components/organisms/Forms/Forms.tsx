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
  }[];
  buttonName: string;
}

const StyledFormik = styled(Formik)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;

const Forms: FunctionComponent<IForms> = ({ dataInput, buttonName }) => {
  const { Colors } = useContext(ThemeContext);

  // All queries for actions on this form
  const [isAvailableState, setisAvailableState] = useState(false);

  return (
    <StyledFormik
      initialValues={{
        email: '',
        emailPro: '',
        password: '',
        name: '',
        lastName: '',
      }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid secondary email address';
        }

        if (!values.emailPro) {
          errors.emailPro = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.emailPro)
        ) {
          errors.emailPro = 'Invalid email address';
        }

        if (!values.lastName) {
          errors.lastName = 'Required';
        } else if (values.lastName.length > 20) {
          errors.lastName = 'Must be 20 characters or less';
        }

        if (!values.name) {
          errors.name = 'Required';
        } else if (values.name.length > 20) {
          errors.name = 'Must be 20 characters or less';
        }

        if (!values.password) {
          errors.password = 'Required';
        } else if (values.password.length > 20) {
          errors.password = 'Must be 20 characters or less';
        }

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
      {({ handleSubmit }) => (
        <View style={{ flex: 1, backgroundColor: 'red' }}>
          {dataInput.map((input: any, index: number) => {
            return (
              <>
                <InputLoginBlock
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  label={input.label}
                  required={input.required}
                  inputType={input.type}
                  style={{ width: 300 }}
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
        </View>
      )}
    </StyledFormik>
  );
};

export default Forms;
