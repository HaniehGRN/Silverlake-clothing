import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
          name: "auth",
          initialState: { authMode: "sign-up" },
          reducers: {
                    setAuthMode: (state, action) => {
                              state.authMode = action.payload
                    }
          }
});

export const { setAuthMode } = authSlice.actions;

export default authSlice.reducer;