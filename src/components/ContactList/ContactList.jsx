import { useMemo } from 'react';
import { useFilterValue } from 'hooks';
import { useFetchContactsQuery } from 'services/contactsApi';
import { List } from './ContactList.styled'
import { ContactItem } from 'components/ContactItem/ContactItem'

export function ContactList() {
 
  const filterValue = useFilterValue();

const {data: contacts} = useFetchContactsQuery();

const getFilteredContacts = useMemo(
  () => () => {
    if (!contacts) {
      return;
    }

    const normalizedFilter = filterValue.toLowerCase().trim();

    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.includes(normalizedFilter)
    );
  },
  [contacts, filterValue]
);
const filteredContacts = getFilteredContacts();
  return (
    <List>
      {filteredContacts 
      && 
      filteredContacts.map(({ id, name, phone }) => {
        return <ContactItem key={id} id={id} name={name} phone={phone} />;
      })}
    </List>
  );
}