import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { onHandleDeleteContact } from 'redux/Operations';
export const ContactData = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(onHandleDeleteContact(contact.id));
  return (
    <li >
      <p>
        {contact.name}: {contact.phone}
      </p>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

ContactData.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};