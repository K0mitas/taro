import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Card = {
  originalIndex: number;
  revealSrc: string;
};

type RaskladEntry = {
  id: number;
  cards: Card[];
  date: string;
  interpretation: string; // Новое поле для текста
};

interface HistoryState {
  entries: RaskladEntry[];
}

const initialState: HistoryState = {
  entries: [],
};

function formatDateForSave(date: Date) {
  const day = date.getDate();
  const months = [
    "января", "февраля", "марта", "апреля", "мая", "июня",
    "июля", "августа", "сентября", "октября", "ноября", "декабря"
  ];
  const monthName = months[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${monthName} ${year}`;
}


export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addRasklad: (state, action: PayloadAction<{
      cards: Card[];
      interpretation: string; 
    }>) => {
      state.entries.unshift({
        id: Date.now(),
        cards: action.payload.cards,
        interpretation: action.payload.interpretation, 
        date: formatDateForSave(new Date()),
      });
    },
    clearHistory: (state) => {
      state.entries = [];
    },
  },
});

export const { addRasklad, clearHistory } = historySlice.actions;

export default historySlice.reducer;