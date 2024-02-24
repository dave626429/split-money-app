import { createSlice } from "@reduxjs/toolkit";
import { groups } from "./testingData";

const initialState = groups || [];

const groupSlice = createSlice({
  name: "groups",
  initialState,
  reducers: {
    getAllGroups: (state, action) => state,
    addGroup: (state, action) => [...state, action.payload],
  },
});

// this is CONVENTION as this will be passed into useSelector
// hook which will provide the whole state object
// select: it is a selector function (createSelector in redux)
// Groups<something>: related to the requirement after the name
export const selectGroupsNextId = (state) => {
  // to see the immer proxy object
  // console.log(JSON.parse(JSON.stringify(state)));
  const groups = state;
  return groups?.length > 0 ? groups[groups.length - 1].id + 1 : 100001;
};

export const { getAllGroups, addGroup } = groupSlice.actions;

export default groupSlice.reducer;
