import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { fetchMarsData, Photos } from './nasaAPI'

interface MarsState {
  status: 'idle' | 'loading' | 'failed',
  selectedSol: number,
  sols: number[][],
  photos: Photos[]
}

const initialState: MarsState = {
  status: 'idle',
  selectedSol: 0,
  sols: [],
  photos: []
}

export const loadDataFromNasa = createAsyncThunk(
  'mars/loadDataFromNasa',
  async (selectedSol: number, { dispatch }) => {
    const photos = await fetchMarsData(selectedSol)
    dispatch(AddPhotos(photos))
  }
);

const marsSlice = createSlice({
  name: 'mars',
  initialState,
  reducers: {
    changeSelectedSol: (state, action: PayloadAction<number>) => {
      state.selectedSol = action.payload
    },
    AddPhotos: (state, action: PayloadAction<Photos[]>) => {
      state.photos.push(...action.payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadDataFromNasa.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(loadDataFromNasa.fulfilled, (state) => {
        state.status = 'idle'
      })
      .addCase(loadDataFromNasa.rejected, (state) => {
        state.status = 'failed'
      })
  },
})

export const { changeSelectedSol, AddPhotos } = marsSlice.actions

export const selectSelectedSol = (state: RootState): number => state.mars.selectedSol
export const selectSols = (state: RootState): number[][] => state.mars.sols
export const selectPhotos = (state: RootState): Photos[] => state.mars.photos
export const selectStatus = (state: RootState): MarsState['status'] => state.mars.status

export default marsSlice.reducer
