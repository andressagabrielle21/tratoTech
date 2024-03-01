import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = '';

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, {payload}: PayloadAction<string>) => payload,
    resetSearch: () => initialState,
  }
})

export const {setSearch, resetSearch} = searchSlice.actions

export default searchSlice.reducer