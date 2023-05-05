import React, { FunctionComponent } from 'react';
import { Form, Formik } from 'formik';
import { Button } from '@chakra-ui/react';
import { Wrapper } from '../../components/Wrapper';
import InputField from '../../components/InputField';
import { useRouter } from 'next/router';
import { Layout } from '@components/Layout';
// import { toErrorMap } from '../utils/toErrorMap';

// interface RegisterProps {}

const Register: FunctionComponent = () => {
  const router = useRouter();
  const register = async (values: any) => {
    console.log(values);
    await router.push('/');
  };
  return (
    <Layout>
      <Wrapper variant="small">
        <Formik
          initialValues={{ username: '', email: '', password: '' }}
          onSubmit={async (values, { setErrors }) => {
            await register(values);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <InputField name="username" placeholder="username" />
              <InputField name="email" placeholder="email" />
              <InputField name="password" placeholder="password" type="password" />
              <Button type="submit" mt={4} bgColor="buttonPrimary" isLoading={isSubmitting}>
                Register
              </Button>
            </Form>
          )}
        </Formik>
      </Wrapper>
    </Layout>
  );
};

export default Register;
