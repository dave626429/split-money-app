import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const generateNextUID = (state) => {
  const UID = 100001;
  let memberID = state.length > 0 ? state[state.length - 1].id + 1 : UID;
  return memberID;
};

const createNewGroupSlice = createSlice({
  name: "createNewGroup",
  initialState,
  reducers: {
    getMembers: (state, action) => state,
    memberadded: (state, action) => {
      const memberWithUid = {
        id: generateNextUID(state),
        ...action.payload,
      };
      return [...state, memberWithUid];
    },
    removeMember: (state, action) => {
      let id = action.payload;
      state = state.filter((member) => member.id != id);
      return state;
    },
  },
});

export const { memberadded, getMembers, removeMember } =
  createNewGroupSlice.actions;
export default createNewGroupSlice.reducer;
