import { RootState } from '../../app/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface InitialState {
  selectedBall: string
}

export const initialState: InitialState = {
  selectedBall: ''
}

const ballsSlice = createSlice({
  name: 'balls',
  initialState,
  reducers: {

    changeSelectedBall: (state, action: PayloadAction<string>) => {
      state.selectedBall = action.payload
    },
  }
})

export const { changeSelectedBall } = ballsSlice.actions

export const selectSelectedBall = (state: RootState): string => state.balls.selectedBall

export default ballsSlice.reducer