import { FunctionComponent } from 'react';
import { Form, Formik } from 'formik';
import { Button } from '@chakra-ui/react';
import { Wrapper } from '../components/Wrapper';
import InputField from '../components/InputField';
// import { toErrorMap } from '../utils/toErrorMap';

interface RegisterProps {}

const Register: FunctionComponent<RegisterProps> = () => {
  const register = (values: any) => {
    console.log(values);
  };
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        onSubmit={async (values, { setErrors }) => {
          register(values);
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
  );
};

export default Register;
