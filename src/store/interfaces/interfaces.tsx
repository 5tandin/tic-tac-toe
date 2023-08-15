export interface GameState {
  winner: {
    winner: string;
  };
}

export interface HistoryState {
  history: {
    history: Array<string>;
  };
}

export interface PlayerState {
  player: {
    player: string;
  };
}

export interface CellState {
  cell: {
    cell: Array<CellType>;
  };
}

type CellType = {
  id: number;
  status: string;
};

export interface WinnerState {
  winner: {
    winner: string;
  };
}
