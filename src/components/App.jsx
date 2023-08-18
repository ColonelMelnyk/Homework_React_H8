import { ContactList } from './ContactsDataList';
import { ListFilter } from './ListFilter';
import { Form } from './Form';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/Selector';
import { onFetchContact } from 'redux/Operations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import css from './Form.module.css'
import { Loader } from './Loader';
export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onFetchContact());
  }, [dispatch]);

  return (
    <div className="app">
       <h2 className= {css.app_title}>Phonebook</h2>
      <Form />
      <h2 className={css.filter_title}>Contacts</h2>
      <ListFilter />
      <ContactList></ContactList>
      {isLoading && !error && <b><Loader/></b>}
    </div>
  );
};