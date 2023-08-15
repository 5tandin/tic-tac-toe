import React from "react";
import "./Cell.scss";
import { Button } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import { toggleStatus } from "../../store/slices/cellSlice";
import { togglePlayer } from "../../store/slices/playerSlice";
import { checkGameWin } from "../../store/slices/gameState";

import { useDispatch, useSelector } from "react-redux";
import {
  CellState,
  PlayerState,
  WinnerState,
} from "../../store/interfaces/interfaces";

export const theme = createTheme({
  palette: {
    secondary: {
      main: grey[700],
    },
  },
});

type PropsType = {
  id: number;
  status: string;
};

export default function Cell({ id, status }: PropsType) {
  const selectPlayer = (state: PlayerState) => state.player;
  const player = useSelector(selectPlayer);
  const selectCell = (state: CellState) => state.cell;
  const cell = useSelector(selectCell);
  const selectWinner = (state: WinnerState) => state.winner;
  const winner = useSelector(selectWinner);
  const dispatch = useDispatch();

  const onKeyPress = () => {
    // меняет статус ячейки на текущего игрока
    dispatch(toggleStatus({ id, player, winner }));
    // меняет ход игрока
    dispatch(togglePlayer({ status }));
    // проверка победы
    dispatch(checkGameWin({ cell }));
  };
  return (
    <ThemeProvider theme={theme}>
      <Button
        onClick={onKeyPress}
        variant="contained"
        color="secondary"
        className="buttonCellUi"
        sx={{ width: 100, height: 100, fontSize: 50 }}
      >
        {cell.cell[id].status}
      </Button>
    </ThemeProvider>
  );
}
