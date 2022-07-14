import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
          name: "auth",
          initialState: { authMode: "sign-in" },
          reducers: {
                    setAuthMode: (state, action) => {
                              state.authMode = action.payload
                    }
          }
});

export const { setAuthMode } = authSlice.actions;

export default authSlice.reducer;