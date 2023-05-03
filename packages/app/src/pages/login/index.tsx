import React, { FunctionComponent, useState, useContext } from 'react';
import UserContext from '@/src/context/UserContext';
import { Form, Formik } from 'formik';
import { Button } from '@chakra-ui/react';
import { Wrapper } from '@components/Wrapper';
import InputField from '@components/InputField';
import { toErrorMap } from '@utils/toErrorMap';
import { useRouter } from 'next/router';
import { Layout } from '@components/Layout';
import { ILogin } from '@/../types/dist';
import { login } from '@utils/user';

interface LoginProps {}

const Register: FunctionComponent<LoginProps> = ({}) => {
  const [_, setUser] = useContext(UserContext);

  const router = useRouter();
  const loginHandler = async (values: ILogin) => {
    let response = await login(values);

    router.push('/');
  };
  return (
    <Layout>
      <Wrapper variant="small">
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={async (values, { setErrors }) => {
            loginHandler(values);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <InputField name="email" placeholder="email" />
              <InputField name="password" placeholder="password" type="password" />
              <Button type="submit" mt={4} bgColor="buttonPrimary" isLoading={isSubmitting}>
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </Wrapper>
    </Layout>
  );
};

export default Register;
