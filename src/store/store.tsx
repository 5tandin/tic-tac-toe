import { configureStore } from "@reduxjs/toolkit";
import cellReducer from "./slices/cellSlice";
import playerReducer from "./slices/playerSlice";
import winnerReducer from "./slices/gameState";
import historyReducer from "./slices/winsHistory";

export const store = configureStore({
  reducer: {
    cell: cellReducer,
    player: playerReducer,
    winner: winnerReducer,
    history: historyReducer,
  },
});
