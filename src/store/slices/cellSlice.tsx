import { createSlice } from "@reduxjs/toolkit";

const cellSlice = createSlice({
  name: "cell",
  initialState: {
    cell: [
      { id: 0, status: "" },
      { id: 1, status: "" },
      { id: 2, status: "" },
      { id: 3, status: "" },
      { id: 4, status: "" },
      { id: 5, status: "" },
      { id: 6, status: "" },
      { id: 7, status: "" },
      { id: 8, status: "" },
    ],
  },
  reducers: {
    // меняет статус ячейки
    toggleStatus(state, action) {
      if (
        state.cell[action.payload.id].status === "" &&
        action.payload.player.player === "X" &&
        action.payload.winner.winner === ""
      ) {
        state.cell[action.payload.id].status = "X";
      } else if (
        state.cell[action.payload.id].status === "" &&
        action.payload.player.player === "0" &&
        action.payload.winner.winner === ""
      ) {
        state.cell[action.payload.id].status = "0";
      }
    },
    // сбрасывает статусы ячеек (для новой игры)
    newGame(state, action) {
      state.cell.forEach((item, i, arr) => {
        item.status = "";
      });
    },
  },
});

export const { toggleStatus, newGame } = cellSlice.actions;

export default cellSlice.reducer;
