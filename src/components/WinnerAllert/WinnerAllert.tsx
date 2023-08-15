import { ThemeProvider } from "@emotion/react";
import { Button, createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { newGame } from "../../store/slices/cellSlice";
import { resetPlayer } from "../../store/slices/playerSlice";
import { resetWinner } from "../../store/slices/gameState";
import { addHistoryWinner } from "../../store/slices/winsHistory";
import "./WinnerAllert.scss";
import { GameState } from "../../store/interfaces/interfaces";

const theme = createTheme({
  palette: {
    secondary: {
      main: grey[700],
    },
  },
});

export default function WinnerAllert() {
  const selectGameWinner = (state: GameState) => state.winner;
  const winner = useSelector(selectGameWinner);

  const dispatch = useDispatch();

  const createNewGame = () => {
    dispatch(newGame({}));
    dispatch(resetPlayer({}));
    dispatch(resetWinner({}));
    dispatch(addHistoryWinner({ winner }));
  };

  return (
    <div className="winnerAllert">
      <div className="winnerAllert_text">Победил игрок "{winner.winner}"</div>
      <ThemeProvider theme={theme}>
        <Button
          onClick={createNewGame}
          variant="contained"
          color="secondary"
          sx={{
            width: 200,
            height: 100,
            fontSize: 25,
            marginTop: 5,
            marginBottom: 5,
            zIndex: 1000,
          }}
        >
          Новая игра
        </Button>
      </ThemeProvider>
    </div>
  );
}
