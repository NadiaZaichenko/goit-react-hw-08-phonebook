import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { useFetchContactsQuery } from "services/contactsApi";
import { Message } from "components/Message/Message";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {
    Container,
    SectionsContainer,
    Section,
    SectionTitle,
  } from './Contacts.styled';


 const Contacts = () => {
    const {
      data: contacts,
    } = useFetchContactsQuery();

    const totalContacts = () => {
        if(!contacts) {
            return 0;
        }
        return contacts.length;

    }

    return (
        <Container>
      <SectionsContainer>
        <Section>
          <SectionTitle>Add contact</SectionTitle>
          <ContactForm />
        </Section>
        <Section>
          <SectionTitle>Contacts</SectionTitle>
          {totalContacts !== 0 ? (
            <>
              <Filter />
              <ContactList />
            </>
          ) : (
            <Message message="There are no contacts in your Phonebook. Please add your first contact!" />
          )}
        </Section>
      </SectionsContainer>
      <ToastContainer
      autoClose={3000}/>
    </Container>
    );
}

export default Contacts;