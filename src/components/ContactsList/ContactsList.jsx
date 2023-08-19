import { useSelector } from 'react-redux';
import { ContactItem } from '../ContactItem/ContactItem';
import { selectFilters } from 'redux/contacts/Selector';
import css from './ContactList.module.css'
const ContactsList = () => {
  const filteredContacts = useSelector(selectFilters);
  return (
    <ul className={css.contact_list} >
      {filteredContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact}></ContactItem>
      ))}
    </ul>
  );
};

export default ContactsList;
