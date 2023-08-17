import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onHandleContactAdd } from 'redux/Operations';
import { selectContacts } from 'redux/Selector';
import css from './Form.module.css'
import { Notify } from 'notiflix';
export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const isRealContact = contacts.some(
    contact => contact.name.toLowerCase() === name.toLowerCase()
  );
  const onHandleSubmit = event => {
    event.preventDefault();
    if (isRealContact) {
      return Notify.failure(`${name} already exists!`);
    }
    dispatch(onHandleContactAdd({ name, phone }));
    setName('');
    setPhone('');
    return Notify.success(`${name} is added!`);
  };

  const onHandleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  return (
    <form className={css.form} onSubmit={onHandleSubmit}>
        <label >
          <h2>Name</h2>
          <input
          value={name}
          onChange={onHandleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash, and spaces. For example: Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required   
          />
        </label>
        <label>
          <h2>Number</h2>
          <input
           value={phone}
           onChange={onHandleChange}
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.button} type="submit">Add contact</button>
      </form>
  );
};