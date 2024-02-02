import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import createNewGroupSlice from "./createNewGroupSlice";
import GroupsSlice from "./GroupsSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    createNewGroup: createNewGroupSlice,
    groups: GroupsSlice,
  },
});
