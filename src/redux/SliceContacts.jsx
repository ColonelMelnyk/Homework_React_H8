import { createSlice } from '@reduxjs/toolkit';
import { onFetchContact, onHandleContactAdd, onHandleDeleteContact } from 'redux/Operations';
const onLoadMarker = state => {
  state.isLoading = true;
};
const onRejectionMarker = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const slicedContacts = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [onFetchContact.pending]: onLoadMarker,
    [onFetchContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [onFetchContact.rejected]: onRejectionMarker,
    [onHandleContactAdd.pending]: onLoadMarker,
    [onHandleContactAdd.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [onHandleContactAdd.rejected]: onRejectionMarker,
    [onHandleDeleteContact.pending]:onLoadMarker,
    [onHandleDeleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    [onHandleDeleteContact.rejected]: onRejectionMarker,
  },
});
export const reducerContacts = slicedContacts.reducer;