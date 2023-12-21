import { ContactListItem } from '../ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';

import css from './ContactList.module.css';
import { getFilteredContacts } from '../../redux/selectors';

export const ContactList = () => {
  const filterContacts = useSelector(getFilteredContacts);

  return (
    <ul className={css.list}>
      {filterContacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};
