import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onHandleAddContact } from 'redux/contacts/Operations';
import { selectContacts } from 'redux/contacts/Selector';
import Notify from 'notiflix';
import css from './Form.module.css'
export const ContactsForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isRealName = contacts.some(
    contact => contact.name.toLowerCase() === name.toLowerCase()
  );
  const isRealNumber = contacts.some(contact => contact.number === number);
  const onHandleSubmit = e => {
    e.preventDefault();
    if (isRealName) {
      return Notify.failure(`Contact with name ${name} is present `);
    } else if (isRealNumber) {
      return Notify.failure(`Number ${number} is present`);
    }
    dispatch(onHandleAddContact({ name, number }));
    setName('');
    setNumber('');
  };

  const onHandleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        const digits = value.replace(/\D/g, '');
        const truncNumber = digits.slice(0, 10);
        const formatNumber = truncNumber.replace(
          /(\d{3})(\d{3})(\d{4})/,
          '$1-$2-$3'
        );
        setNumber(formatNumber);
        break;
      default:
        return;
    }
  };

  return (
    <div className={css.contacts_container}>
      <h1 className={css.contacts_title}>Phonebook</h1>
      <form onSubmit={onHandleSubmit}>
        <div>
          <label >
            <h2 className={css.contacts_input_title}>Name</h2>
            <input
              type="text"
              name="name"
              pattern="[A-Za-zА-ЯЁІЇЄҐа-яёіїєґ\s]+"
              title="Name may contain only letters, apostrophe, dash, and spaces. For example: Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={onHandleChange} />
          </label>
        </div>
        <div >
          <label>
            <h2 className={css.contacts_input_title}>Number</h2>
            <input
              type="tel"
              name="number"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              title="Phone number must be digits and must contain 10 numbers"
              required
              value={number}
              onChange={onHandleChange}
            />
          </label>
        </div>

        <button type="submit" className={css.submit_button}>Add new contact</button>
      </form>
    </div>
  );
};
