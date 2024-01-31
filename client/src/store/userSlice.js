import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 100001,
  name: "Dummy",
};

const userSlice = createSlice({
  name: "user",
  initialState,
});

export default userSlice.reducer;
