import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useLoggedIn, useTheme } from 'hooks';
import { Global, ThemeProvider } from '@emotion/react';
import { Switcher } from 'components/Switcher/Switcher';
import { GlobalStyles } from '../../styled/Global.styled';
import { theme } from '../../styled/Theme.styled';

import { Loader } from '../Loader/loader';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import {
  Container,
  HeaderContainer,
  Header,
  LogoWrapper,
  LogoText,
  StyledMain,
  LogoIcon,
  Wrapper,
} from './Layout.styled';

export const Layout = () => {
  const isLoggedIn = useLoggedIn();
  const themeMode = useTheme();

  return (
<ThemeProvider theme={theme[themeMode]}>
<Global styles={GlobalStyles} />
<Header>
  <HeaderContainer>
    <Wrapper>
      <LogoWrapper>
        <LogoIcon size="40" />
        <LogoText size="50">Phonebook</LogoText>
      </LogoWrapper>
      <Switcher />
    </Wrapper>
    <Navigation />
    {isLoggedIn ? <UserMenu /> : <AuthNav />}
  </HeaderContainer>
</Header>
<StyledMain>
  <Container>
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  </Container>
</StyledMain>
</ThemeProvider>
);
}