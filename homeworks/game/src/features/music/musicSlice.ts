import { RootState } from '../../app/store'
import { createSlice } from '@reduxjs/toolkit'

interface InitialState {
  isOn: boolean
}

export const initialState: InitialState = {
  isOn: false
}

const musicSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {

    play: (state) => {
      state.isOn = true
    },

    stop: (state) => {
      state.isOn = false
    }
  }
})


export const { play, stop } = musicSlice.actions

export const selectIsOn = (state: RootState): boolean => state.music.isOn

export default musicSlice.reducer