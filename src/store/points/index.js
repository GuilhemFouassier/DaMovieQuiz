import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  total: 0
}

const points = createSlice({
  name: 'points',
  initialState,
  reducers: {
    addPoints(state, payload ) {
      state.total = payload
    }
  }
});

// Actions
export const {
    addPoints,
} = points.actions;


// Selectors
export const getTotalPoints = (state) => state.points.total;

export default points.reducer;