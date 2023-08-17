import { useSelector } from 'react-redux';
import { ContactData } from './ContactsData';
import { selectFilteredContacts } from 'redux/Selector';
import css from './Form.module.css'
export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <ul className={css.contacts_list}>
      {filteredContacts.map(contact => (
        <ContactData key={contact.id} contact={contact}></ContactData>
      ))}
    </ul>
  );
};