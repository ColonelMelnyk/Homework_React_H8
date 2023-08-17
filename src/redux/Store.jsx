import { configureStore } from '@reduxjs/toolkit';
import { reducerContacts } from './SliceContacts';
import {  reducerFilters } from './SliceFilters';
export const store = configureStore({
  reducer: {
    contacts: reducerContacts,
    filter: reducerFilters,
  },
});