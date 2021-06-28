import { RootState } from '../../app/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ScoreAction {
  playerName: string,
  scoreCount: number
}

interface InitialState {
  player1: number,
  player2: number
}

export const initialState: InitialState = {
  player1: 0,
  player2: 0
}

const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {

    addScore: (state, action: PayloadAction<ScoreAction>) => {

    },

    removeScore: (state, action: PayloadAction<number>) => {

    }
  }
})


export const { addScore, removeScore } = scoreSlice.actions

export const selectPlayer1Score = (state: RootState): number => state.score.player1
export const selectPlayer2Score = (state: RootState): number => state.score.player2

export default scoreSlice.reducer