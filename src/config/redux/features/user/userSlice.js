import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
          name: "user",
          initialState: { currentUser: null },
          reducers: {
                    setCurrentUser: (state, action) => {
                              state.currentUser = action.payload
                    }
          }
});

export const { setCurrentUser } = userSlice.actions;

export default userSlice.reducer;