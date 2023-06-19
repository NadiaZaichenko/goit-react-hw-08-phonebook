import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { refreshUser } from 'redux/auth/authOperations';
import { useRefreshUser } from 'hooks';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() => import('../pages/Home/HomePage'));
const RegisterationPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));



export const App = () => {
const dispatch = useDispatch();
const isRefreshing = useRefreshUser();


useEffect(() => {
  dispatch(refreshUser());
}, [dispatch]);
  return (!isRefreshing && (<>
   <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={
        <PublicRoute>
          <HomePage />
          </PublicRoute>} 
          />
          <Route
          path="/register"
          element={
            <PublicRoute redirectTo="/contacts" restricted>
              <RegisterationPage/>
              </PublicRoute> }
        />
        <Route
          path="/login"
          element={
            <PublicRoute redirectTo="/contacts" restricted>
              <LoginPage/>
              </PublicRoute> }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" restricted>
                 <ContactsPage/>
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  <ToastContainer autoClose={3000}/>
  </>
     
  
  )
);
}

