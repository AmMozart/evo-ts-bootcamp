import { RootState } from '../../app/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface InitialState {
  photoIds: number[]
}

export const initialState: InitialState = {
  photoIds: []
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {

    addToFavorites: (state, action: PayloadAction<number>) => {
      if (!state.photoIds.find(x => x === action.payload))
        state.photoIds.push(action.payload)
    },

    removeFromFavorites: (state, action: PayloadAction<number>) => {
      let index = state.photoIds.indexOf(action.payload)

      if (index !== -1)
        state.photoIds.splice(index, 1)
    }
  }
})


export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions

export const selectFavoritesPhotos = (state: RootState): number[] => state.fovorites.photoIds

export default favoritesSlice.reducer
