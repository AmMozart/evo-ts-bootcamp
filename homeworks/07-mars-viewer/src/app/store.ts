import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import marsReducer from '../features/mars/marsSlice'
import favoritesReducer from '../features/favorives/favoritesSlice'

export const store = configureStore({
  reducer: {
    mars: marsReducer,
    fovorites: favoritesReducer
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
