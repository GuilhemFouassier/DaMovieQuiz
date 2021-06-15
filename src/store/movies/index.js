import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: []
}

const movies = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies(state, { payload }) {
      state.list = [...state.list, payload]
    },
    editMovies (state, { payload }) {
      state.list = [...state.list.map(item => item.id === payload.id ? payload : item  )]
    }
  }
});

// Actions
export const {
  addMovies,
  editMovies
} = movies.actions;

export const retrieveMovies = () => async dispatch => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=7ea5f490261a949e52930517e1b4657c`, {
      method: 'GET',
    })
    const data = await response.json();
    dispatch(addMovies(data))
  } catch (e) {
    console.error(e);
  }
}

// Selectors
export const getMovies = (state) => state.movies.list;


export default movies.reducer;