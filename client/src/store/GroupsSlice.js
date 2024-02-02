import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const groupSlice = createSlice({
  name: "groups",
  initialState,
  reducers: {
    getAllGroups: (state, action) => state,
    groupAdded: (state, action) => {},
  },
});

export const { getAllGroups, groupAdded } = groupSlice.actions;

export default groupSlice.reducer;
