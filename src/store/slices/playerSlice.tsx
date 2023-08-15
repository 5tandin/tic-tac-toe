import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "player",
  initialState: {
    player: "X",
  },
  reducers: {
    // меняет очередь хода
    togglePlayer(state, action) {
      if (state.player === "X" && action.payload.status === "") {
        state.player = "0";
      } else if (state.player === "0" && action.payload.status === "") {
        state.player = "X";
      } else {
        return;
      }
    },
    // сбрасывает текущего игрока до изначального состояния (для новой игры)
    resetPlayer(state, action) {
      state.player = "X";
    },
  },
});

export const { togglePlayer, resetPlayer } = playerSlice.actions;

export default playerSlice.reducer;
