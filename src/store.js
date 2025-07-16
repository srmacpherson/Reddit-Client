import { configureStore } from '@reduxjs/toolkit';
import redditReducer from './features/redditSlice';


export const store = configureStore({
    reducer: {
        reddit: redditReducer,
    }
});