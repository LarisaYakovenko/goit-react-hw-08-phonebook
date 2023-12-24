import { createSelector } from '@reduxjs/toolkit';
import { getContacts } from '../contacts/selectors';

export const getFilter = state => state.filter.filter;


export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
