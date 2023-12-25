import { Form } from '../../components/Form/Form';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContactsCount,
  selectIsLoading,
  selectError,
} from '../../redux/contacts/selectors';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import { Circles } from 'react-loader-spinner';

import css from './Contacts.module.css';

export default function App() {
  const dispatch = useDispatch();
  const count = useSelector(selectContactsCount);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <Form />
      <h2 className={css.subtitle}>Contacts</h2>
      <p className={css.total}>
        Total contacts in phonebook:
        <span className={css.total_count}> {count}</span>
      </p>
      <Filter />
      {isLoading && !error && (
        <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}
      {error && <p className={css.errorMessage}>An error occurred: {error}</p>}
      <ContactList />
      <Toaster position="top-right" />
    </div>
  );
}
