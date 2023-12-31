import { SignInLink, RegisterLinkWrapper, RegisterLinkMessage, RegisterLink } from './AuthNav.styled';

export const AuthNav = () => {
    return (
    <div>
      <SignInLink to="/login">Log in</SignInLink>
      <RegisterLinkWrapper>
      <RegisterLinkMessage>New user?</RegisterLinkMessage>
      <RegisterLink to="/register">Start here</RegisterLink>
      </RegisterLinkWrapper>
    </div>
    )
}