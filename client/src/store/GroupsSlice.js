import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const groupSlice = createSlice({
  name: "groups",
  initialState,
  reducers: {
    getAllGroups: (state, action) => state,
    addGroup: (state, action) => [...state, ...action.payload],
  },
});

export const { getAllGroups, addGroup } = groupSlice.actions;

export default groupSlice.reducer;
