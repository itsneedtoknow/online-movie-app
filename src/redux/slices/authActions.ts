import { createSlice } from "@reduxjs/toolkit";
const savedUser: string | null = localStorage.getItem("userName");

interface AuthState {
  user: string | null;
  isAuthorized: boolean;
  isAdmin: boolean;
}

const initialState = {
  user: savedUser,
  isAuthorized: !!savedUser,
  isAdmin: savedUser === "admin",
};

export const authActions = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      const userName = action.payload;
      localStorage.setItem("userName", userName);
      state.user = userName;
      state.isAuthorized = true;
      if (userName === "admin") {
        state.isAdmin = true;
      } else {
        state.isAdmin = false;
      }
    },
    logout(state) {
      localStorage.removeItem("userName");
      state.user = null;
      state.isAuthorized = false;
      state.isAdmin = false;
      console.log(state);
    },
  },
});
export const { login, logout } = authActions.actions;
export default authActions.reducer;
