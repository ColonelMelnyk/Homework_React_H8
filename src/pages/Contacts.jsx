import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/Selector';
import { fetchContacts } from 'redux/contacts/Operations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactList from 'components/ContactList/ContactList';
import { Loader } from 'components/Loader/Loader';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section >
            <ContactForm />
           <div>
           <h2 >My contacts</h2>
            <Filter />
            {isLoading && !error ? <Loader /> : <ContactList />}
           </div>
    </section>
  );
};

export default Contacts;
