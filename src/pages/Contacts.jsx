import { Filter } from 'components/Filter/Filter';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/Selector';
import { fetchContacts } from 'redux/contacts/Operations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactsList from 'components/ContactsList/ContactsList';
import { Loader } from 'components/Loader/Loader';
import css from 'components/ContactsList/ContactList.module.css'
const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section className={css.contact_form_container}>
            <ContactsForm />
           <div className={css.contact_list_container}>
           <h2 >My contacts</h2>
            <Filter />
            {isLoading && !error ? <Loader /> : <ContactsList />}
           </div>
    </section>
  );
};

export default Contacts;
