import React, { FunctionComponent } from 'react';
import { Form, Formik } from 'formik';
import { Button } from '@chakra-ui/react';
import { Wrapper } from '../components/Wrapper';
import InputField from '../components/InputField';
import { toErrorMap } from '../utils/toErrorMap';

interface LoginProps {}

const Register: FunctionComponent<LoginProps> = ({}) => {
  const login = (values: any) => {
    console.log(values);
  };
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={async (values, { setErrors }) => {
          login(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField name="username" placeholder="username" />
            <InputField name="password" placeholder="password" type="password" />
            <Button type="submit" mt={4} bgColor="buttonPrimary" isLoading={isSubmitting}>
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Register;
