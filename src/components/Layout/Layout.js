import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useLoggedIn } from 'hooks';
import { Loader } from '../Loader/loader';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { StyledMain, Container } from './Layout.styled';

export const Layout = () => {
  const isLoggedIn = useLoggedIn();

  return (
    <>
    <header>
      <Navigation />
      <>
       {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </>
     
    </header>
    <StyledMain>
    <Container>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  </StyledMain>
    </>
  );
};