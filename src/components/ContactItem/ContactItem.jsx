import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/Operations';
import css from './FormItem.module.css'
export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <li className={css.list_member}>
      <div>
          <p>{contact.name}</p>
          <p>{contact.number}</p>
      </div>
      <button
        type="button" className={css.list_button} onClick={handleDelete}>Delete Contact</button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
