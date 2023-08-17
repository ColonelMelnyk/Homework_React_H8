import { createSlice } from '@reduxjs/toolkit';
const slicedFilters = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    updatedFilter: (state, action) => {
      return action.payload;
    },
  },
});
export const { updatedFilter } = slicedFilters.actions;
export const  reducerFilters = slicedFilters.reducer;