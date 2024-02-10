import { createSlice } from "@reduxjs/toolkit";
import { selectGroupsNextId } from "./groupsSlice";

const generateNextID = ({ members }) => {
  const ID = 100001;
  let id = members.length > 0 ? members[members.length - 1].id + 1 : ID;
  return id;
};

const initialState = { id: 0, groupName: "Untitled", members: [] };

const createNewGroupSlice = createSlice({
  name: "createNewGroup",
  initialState,
  reducers: {
    setInitialState: (state, action) => {
      return { ...initialState, id: selectGroupsNextId(action.payload) };
    },
    resetState: () => {
      return initialState;
    },
    addMember: (state, action) => {
      const memberWithUid = {
        id: generateNextID(state),
        ...action.payload,
      };
      return { ...state, members: [...state.members, memberWithUid] };
    },
    removeMember: (state, action) => {
      let id = action.payload;
      console.log(id);
      let { members } = state;
      members = members.filter((member) => member.id != id);
      return { ...state, members };
    },
    setCreateNewGroupName: (state, action) => {
      return { ...state, groupName: action.payload };
    },
  },
});

export const {
  addMember,
  removeMember,
  setInitialState,
  setCreateNewGroupName,
  resetState,
} = createNewGroupSlice.actions;

export default createNewGroupSlice.reducer;
