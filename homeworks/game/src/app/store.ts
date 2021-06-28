import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import ballsSlice from '../features/ball/ballsSlice';
import musicReducer from '../features/music/musicSlice'
import scoreReducer from '../features/score/scoreSlice'

export const store = configureStore({
  reducer: {
    music: musicReducer,
    score: scoreReducer,
    balls: ballsSlice
  },
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
