import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import createNewGroupSlice from "./createNewGroupSlice";
import groupsSlice from "./groupsSlice";
import contactsSlice from "./contactsSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    createNewGroup: createNewGroupSlice,
    groups: groupsSlice,
    contacts: contactsSlice,
  },
});
