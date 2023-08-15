import { createSlice } from "@reduxjs/toolkit";

const winsHistorySlice = createSlice({
  name: "player",
  initialState: {
    history: [""],
  },
  reducers: {
    // Добавляет победителя в историю победителей
    addHistoryWinner(state, action) {
      if (action.payload.winner.winner != "") {
        let playerWin = action.payload.winner.winner;
        state.history.push(playerWin);
      }
      console.log(action.payload.winner.winner);
    },
    // Сбрасывает историю победителей
    resetHistoryWinner(state, action) {
      state.history = [""];
    },
  },
});

export const { addHistoryWinner, resetHistoryWinner } =
  winsHistorySlice.actions;

export default winsHistorySlice.reducer;
