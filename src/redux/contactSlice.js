import { createSlice } from '@reduxjs/toolkit'
import { addContact, deleteContact, fetchContacts } from '../servise/serviseApi'

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder.addCase(fetchContacts.pending,(state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(addContact.pending, (state, action) => {
        state.isLoading = false;
      } )
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = [...state.items, action.payload];
      } )
      .addCase(addContact.rejected,(state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      } )

      .addCase(deleteContact.pending, (state, action) => {
        state.isLoading = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(item => item.id !== action.payload.id)

      } )
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      } )
   }
})

export const contactsReducer = contactSlice.reducer;
