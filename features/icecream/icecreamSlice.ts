import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
  numOfIcecream: number
}

const initialState: InitialState = {
  numOfIcecream: 20,
}

const icecreamSlice = createSlice({
  name: 'icecream',
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numOfIcecream -= action.payload
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numOfIcecream += action.payload
    },
  },
})

export default icecreamSlice.reducer
export const { ordered, restocked } = icecreamSlice.actions
