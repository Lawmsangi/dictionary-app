import { configureStore } from '@reduxjs/toolkit';
import quotesReducer from './features/quoteSlice';
import wordsReducer from './features/wordSlice'

const store = configureStore({
  reducer: {
    quotes: quotesReducer,
    words: wordsReducer
  },
});

export default store;