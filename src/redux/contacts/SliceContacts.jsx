import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, onHandleAddContact, onHandleDeleteContact } from './Operations';
const onHandlePending = state => {
  state.isLoading = true;
};

const onHandleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, onHandlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, onHandleRejected)
      .addCase(onHandleAddContact.pending, onHandlePending)
      .addCase(onHandleAddContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(onHandleAddContact.rejected, onHandleRejected)
      .addCase(onHandleDeleteContact.pending, onHandlePending)
      .addCase(onHandleDeleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
      .addCase(onHandleDeleteContact.rejected, onHandleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;