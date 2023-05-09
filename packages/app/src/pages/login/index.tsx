import React, { FunctionComponent } from 'react';
// import { UserContext } from '@/src/pages/_app';
// import { UserContext } from '@context/UserContext';
import { Form, Formik } from 'formik';
import { Button } from '@chakra-ui/react';
import { Wrapper } from '@components/Wrapper';
import InputField from '@components/InputField';
import { toErrorMap } from '@utils/toErrorMap';
import { useRouter } from 'next/router';
import { Layout } from '@components/Layout';
import { AuthContextType, ILogin } from '@/../types';
import { useAuth } from '../../context/AuthContext';

// interface LoginProps {}

const Register: FunctionComponent = () => {
  const { login } = useAuth() as AuthContextType;
  const router = useRouter();
  const loginHandler = async (values: ILogin) => {
    try {
      const response = await login(values);
      console.log(response);
      await router.push('/');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Layout>
      <Wrapper variant="small">
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={async (values, { setErrors }) => {
            await loginHandler(values);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <InputField name="email" placeholder="email" type="email" required />
              <InputField name="password" placeholder="password" type="password" required />
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
