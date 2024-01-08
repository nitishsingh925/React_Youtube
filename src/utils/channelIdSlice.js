import { createSlice } from "@reduxjs/toolkit";

const channelIdSlice = createSlice({
  name: "channelId",
  initialState: { channelId: null },
  reducers: {
    setChannelId: (state, action) => {
      state.channelId = action.payload;
    },
  },
});
export const { setChannelId } = channelIdSlice.actions;
export default channelIdSlice.reducer;
