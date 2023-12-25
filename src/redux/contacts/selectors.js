export const getContacts = state => state.contacts.items;
export const selectContactsCount = state => state.contacts.items.length;
export const getFilter = state => state.filter.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;


