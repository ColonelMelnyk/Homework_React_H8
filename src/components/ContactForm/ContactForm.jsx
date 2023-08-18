import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/Operations';
import { selectContacts } from 'redux/contacts/Selector';
import css from './Form.module.css'
export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const isExistingName = contacts.some(
    contact => contact.name.toLowerCase() === name.toLowerCase()
  );

  const isExistingNumber = contacts.some(contact => contact.number === number);

  const handleSubmit = e => {
    e.preventDefault();
    if (isExistingName) {
      return alert(`Contact with name ${name} is already in contact`);
    } else if (isExistingNumber) {
      return alert(`Number ${number} is already in contact`);
    }
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        const digitsOnly = value.replace(/\D/g, '');
        const truncatedNumber = digitsOnly.slice(0, 10);
        const formattedNumber = truncatedNumber.replace(
          /(\d{3})(\d{3})(\d{4})/,
          '$1-$2-$3'
        );
        setNumber(formattedNumber);
        break;
      default:
        return;
    }
  };

  return (
    <div className={css.contacts_container}>
      <h1 className={css.contacts_title}>Phonebook</h1>
      <form onSubmit={handleSubmit}>
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
              onChange={handleChange} />
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
              onChange={handleChange}
            />
          </label>
        </div>

        <button type="submit" className={css.submit_button}>Add new contact</button>
      </form>
    </div>
  );
};
