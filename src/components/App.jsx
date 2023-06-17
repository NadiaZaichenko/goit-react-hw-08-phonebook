import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { Filter } from './Filter/Filter';
// import { Message } from './Message/Message'
// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Loader } from './Loader/loader';
// import { fetchContacts } from 'redux/operation';
// import { selectContactsItems, selectIsLoading, selectError } from 'redux/selectors';
// import { Container, SectionsContainer, Section, Title, SectionTitle } from './App.styles'
// import { toast, ToastContainer} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/authOperations';
import { useAuth } from 'hooks';

const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));



export const App = () => {
// const contactsItems = useSelector(selectContactsItems);
// const isLoading = useSelector(selectIsLoading);
// const error = useSelector(selectError);

const dispatch = useDispatch();
const {isRefreshing} = useAuth();


useEffect(() => {
  dispatch(refreshUser());
}, [dispatch]);

// useEffect(() => {
//   if(error) {
//     toast.error(error);
//   }
//   if(error === 'ERR_BAD_REQUEST') {
//     toast.error('There are some problems. Try again later')
//   };
// }, [error])

  return isRefreshing ? (
    <b>Refreshing user ... </b>) : (
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
    // <Container>
    //   {isLoading && <Loader/>}
    //   <Title>Phonebook</Title>
    //   <SectionsContainer>
    //     <Section>
    //       <SectionTitle>Add Contact</SectionTitle>
    //       <ContactForm />
    //   </Section>
    //     <Section >
    //       <SectionTitle>Contacts</SectionTitle>
    //    {contactsItems.length !== 0 ? (
    //    <>
    //    <Filter/>
    //    <ContactList/>
    //    </> 
    //    ) : ( 
    //    <Message message="There are no contacts in your phonebook. Please add your first contact!" />)}  
    //     </Section>
    //   </SectionsContainer>
    //   <ToastContainer/>
    // </Container>


}

