import { createSlice } from "@reduxjs/toolkit";

const gameWinnerSlice = createSlice({
  name: "winner",
  initialState: {
    winner: "",
  },
  reducers: {
    // проверка всех возможных исходов
    checkGameWin(state, action) {
      if (
        action.payload.cell.cell[0].status === "X" &&
        action.payload.cell.cell[1].status === "X" &&
        action.payload.cell.cell[2].status === "X"
      ) {
        state.winner = "X";
      } else if (
        action.payload.cell.cell[3].status === "X" &&
        action.payload.cell.cell[4].status === "X" &&
        action.payload.cell.cell[5].status === "X"
      ) {
        state.winner = "X";
      } else if (
        action.payload.cell.cell[6].status === "X" &&
        action.payload.cell.cell[7].status === "X" &&
        action.payload.cell.cell[8].status === "X"
      ) {
        state.winner = "X";
      } else if (
        action.payload.cell.cell[0].status === "X" &&
        action.payload.cell.cell[3].status === "X" &&
        action.payload.cell.cell[6].status === "X"
      ) {
        state.winner = "X";
      } else if (
        action.payload.cell.cell[1].status === "X" &&
        action.payload.cell.cell[4].status === "X" &&
        action.payload.cell.cell[7].status === "X"
      ) {
        state.winner = "X";
      } else if (
        action.payload.cell.cell[2].status === "X" &&
        action.payload.cell.cell[5].status === "X" &&
        action.payload.cell.cell[8].status === "X"
      ) {
        state.winner = "X";
      } else if (
        action.payload.cell.cell[0].status === "X" &&
        action.payload.cell.cell[4].status === "X" &&
        action.payload.cell.cell[8].status === "X"
      ) {
        state.winner = "X";
      } else if (
        action.payload.cell.cell[2].status === "X" &&
        action.payload.cell.cell[4].status === "X" &&
        action.payload.cell.cell[6].status === "X"
      ) {
        state.winner = "X";
      } else if (
        action.payload.cell.cell[0].status === "0" &&
        action.payload.cell.cell[1].status === "0" &&
        action.payload.cell.cell[2].status === "0"
      ) {
        state.winner = "0";
      } else if (
        action.payload.cell.cell[3].status === "0" &&
        action.payload.cell.cell[4].status === "0" &&
        action.payload.cell.cell[5].status === "0"
      ) {
        state.winner = "0";
      } else if (
        action.payload.cell.cell[6].status === "0" &&
        action.payload.cell.cell[7].status === "0" &&
        action.payload.cell.cell[8].status === "0"
      ) {
        state.winner = "0";
      } else if (
        action.payload.cell.cell[0].status === "0" &&
        action.payload.cell.cell[3].status === "0" &&
        action.payload.cell.cell[6].status === "0"
      ) {
        state.winner = "0";
      } else if (
        action.payload.cell.cell[1].status === "0" &&
        action.payload.cell.cell[4].status === "0" &&
        action.payload.cell.cell[7].status === "0"
      ) {
        state.winner = "0";
      } else if (
        action.payload.cell.cell[2].status === "0" &&
        action.payload.cell.cell[5].status === "0" &&
        action.payload.cell.cell[8].status === "0"
      ) {
        state.winner = "0";
      } else if (
        action.payload.cell.cell[0].status === "0" &&
        action.payload.cell.cell[4].status === "0" &&
        action.payload.cell.cell[8].status === "0"
      ) {
        state.winner = "0";
      } else if (
        action.payload.cell.cell[2].status === "0" &&
        action.payload.cell.cell[4].status === "0" &&
        action.payload.cell.cell[6].status === "0"
      ) {
        state.winner = "0";
      }
    },
    resetWinner(state, action) {
      state.winner = "";
    },
  },
});

export const { checkGameWin, resetWinner } = gameWinnerSlice.actions;

export default gameWinnerSlice.reducer;
