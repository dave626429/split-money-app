import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const createNewGroupSlice = createSlice({
  name: "createNewGroup",
  initialState,
  reducers: {
    getMembers: (state, action) => state,
    memberadded: (state, action) => [...state, action.payload],
  },
});

export const { memberadded, getMembers } = createNewGroupSlice.actions;
export default createNewGroupSlice.reducer;
