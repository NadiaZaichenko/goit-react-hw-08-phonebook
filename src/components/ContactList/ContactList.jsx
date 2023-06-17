import { useSelector} from 'react-redux';
// import { selectContactsItems } from 'reducer/selectors';
import { selectFilteredContacts } from 'redux/selectors';
import { List } from './ContactList.styled'
import { ContactItem } from 'components/ContactItem/ContactItem'

export function ContactList() {
  // const contacts = useSelector(selectContactsItems);
  // const filterValue = useSelector(selectFilterValue);

  // const getFilteredContacts = () => {
  //   const normalizedFilter = filterValue.toLowerCase().trim();
  //     return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <List>
      {filteredContacts.map(({ id, name, phone }) => {
        return <ContactItem key={id} id={id} name={name} phone={phone} />;
      })}
    </List>
  );
}