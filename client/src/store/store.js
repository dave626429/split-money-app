import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import createNewGroupSlice from "./createNewGroupSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    createNewGroup: createNewGroupSlice,
  },
});
