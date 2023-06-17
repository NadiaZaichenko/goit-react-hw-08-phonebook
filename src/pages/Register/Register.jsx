import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import {
  FormWrapper,
  UserText,
  LoginLink,
  FormTitle,
} from './Register.styled';

function Register() {
  return (
    <FormWrapper>
    <FormTitle>Create account</FormTitle>
    <RegisterForm />
    <UserText>Already have an account?</UserText>
    <LoginLink to="/login">Log in</LoginLink>
  </FormWrapper>

  );
}

export default Register;