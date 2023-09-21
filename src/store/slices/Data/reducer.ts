import { createSlice } from '@reduxjs/toolkit';
import { character } from '../../../interfaces/data';

export interface Data {
  Characters : Array<character>
}

interface initialStateType {
  Characters: Array<character>,
  Loading: boolean,
  HaveResidents: boolean,
  BG: string
}

const initialState: initialStateType = {
  Characters: [],
  Loading: false,
  HaveResidents: true,
  BG: 'brand.blue'
}

const dataReducer = createSlice({
  name: 'data/Data',
  initialState,
  reducers: {
    setCharacters: (state, action) => {
      state.Characters = action.payload
      if(action.payload.length>0){
        state.HaveResidents = true
      } else {
        state.HaveResidents = false
      }
    },
    setLoading: (state, action) => {
      state.Loading == action.payload
    },
    setBG: (state, action) => {
      state.BG = action.payload
    },
  },
})

export const { actions, reducer } = dataReducer;
