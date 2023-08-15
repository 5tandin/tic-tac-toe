import React from "react";
import Cell from "../Cell/Cell";
import { useDispatch, useSelector } from "react-redux";
import "./Game3x3.scss";
import { Button, ThemeProvider, createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import { newGame } from "../../store/slices/cellSlice";
import { resetPlayer } from "../../store/slices/playerSlice";
import { resetWinner } from "../../store/slices/gameState";
import { addHistoryWinner } from "../../store/slices/winsHistory";
import {
  CellState,
  GameState,
  HistoryState,
  PlayerState,
} from "../../store/interfaces/interfaces";

const theme = createTheme({
  palette: {
    secondary: {
      main: grey[700],
    },
  },
});

type PropsType = {};

export default function Game3x3({}: PropsType) {
  const selectCell = (state: CellState) => state.cell;
  const cell = useSelector(selectCell);
  const selectGameWinner = (state: GameState) => state.winner;
  const winner = useSelector(selectGameWinner);
  const selectPlayer = (state: PlayerState) => state.player;
  const player = useSelector(selectPlayer);
  const selectHistory = (state: HistoryState) => state.history;
  const history = useSelector(selectHistory);

  const dispatch = useDispatch();

  const createNewGame = () => {
    dispatch(newGame({}));
    dispatch(resetPlayer({}));
    dispatch(resetWinner({}));
    dispatch(addHistoryWinner({ winner }));
  };

  return (
    <div className="gameContainer">
      <div className="lineCell">
        {cell.cell.map((g) => {
          if (g.id === 0 || g.id === 1 || g.id === 2) {
            return (
              <Cell id={g.id} status={cell.cell[g.id].status} key={g.id} />
            );
          }
        })}
      </div>
      <div className="lineCell">
        {cell.cell.map((g) => {
          if (g.id === 3 || g.id === 4 || g.id === 5) {
            return (
              <Cell id={g.id} status={cell.cell[g.id].status} key={g.id} />
            );
          }
        })}
      </div>
      <div className="lineCell">
        {cell.cell.map((g) => {
          if (g.id === 6 || g.id === 7 || g.id === 8) {
            return (
              <Cell id={g.id} status={cell.cell[g.id].status} key={g.id} />
            );
          }
        })}
      </div>
      <div className="lineButton">
        <ThemeProvider theme={theme}>
          <Button
            onClick={createNewGame}
            variant="contained"
            color="secondary"
            className="buttonCellUi"
            sx={{ width: 200, height: 50, fontSize: 25 }}
          >
            Новая игра
          </Button>
        </ThemeProvider>
      </div>
    </div>
  );
}
