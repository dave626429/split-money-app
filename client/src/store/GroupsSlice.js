import { createSlice } from "@reduxjs/toolkit";
import { groups } from "./testingData";

const initialState = groups || [];

const groupSlice = createSlice({
  name: "groups",
  initialState,
  reducers: {
    getAllGroups: (state) => state,
    addGroup: (state, action) => [...state, action.payload],
    editMember: (state, action) => {
      const { groupId, id, name, phone } = action.payload;
      const groupIndex = state.findIndex(
        (group) => group.id === parseInt(groupId)
      );
      const memberIndex = state[groupIndex].members.findIndex(
        (member) => member.id === parseInt(id)
      );
      state[groupIndex].members[memberIndex].name = name;
      state[groupIndex].members[memberIndex].phone = phone;
    },
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

export const getGroupByID = ({ groups }, id) =>
  groups.filter((group) => group.id === parseInt(id))[0];

export const { getAllGroups, addGroup, editMember } = groupSlice.actions;

export default groupSlice.reducer;
