import { Button, ThemeProvider, createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./WinnersHistory.scss";
import { resetHistoryWinner } from "../../store/slices/winsHistory";
import { HistoryState } from "../../store/interfaces/interfaces";

export const theme = createTheme({
  palette: {
    secondary: {
      main: grey[700],
    },
  },
});

export default function WinnersHistory() {
  const selectHistory = (state: HistoryState) => state.history;
  const history = useSelector(selectHistory);

  const dispatch = useDispatch();

  const cleatHistory = () => {
    dispatch(resetHistoryWinner({}));
  };

  return (
    <div className="historyContainer">
      <ThemeProvider theme={theme}>
        <Button
          onClick={cleatHistory}
          variant="contained"
          color="secondary"
          className="buttonCellUi"
          sx={{ width: 200, height: 30, fontSize: 15 }}
        >
          Сбросить историю
        </Button>
      </ThemeProvider>
      <div className="histolyListContainer">
        <div className="titleHistory">История побед</div>
        {history.history.map((t) => {
          if (t != "") {
            return <div className="titleHistory_item">Победитель {t}</div>;
          }
        })}
      </div>
    </div>
  );
}
