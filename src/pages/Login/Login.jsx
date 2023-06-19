import { LogInForm } from 'components/LogInForm/LogInForm';
import { FormWrapper, NewUserText, RegisterLink, FormTitle } from './Login.styled';

function Login() {
  return (
    <FormWrapper>
      <FormTitle>Log in</FormTitle>
      <LogInForm />
      <NewUserText>New user?</NewUserText>
      <RegisterLink to="/register">Create your account</RegisterLink>
    </FormWrapper>
  );
}

export default Login;