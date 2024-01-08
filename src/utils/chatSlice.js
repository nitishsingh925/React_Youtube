import { createSlice } from "@reduxjs/toolkit";
import { OFFSER_LIVE_CHAT } from "./contants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.splice(OFFSER_LIVE_CHAT, 1);
      state.messages.unshift(action.payload);
    },
  },
});
export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
