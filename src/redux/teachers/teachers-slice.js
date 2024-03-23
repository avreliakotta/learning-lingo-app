import { createSlice } from "@reduxjs/toolkit";
import {fetchAll} from "./teachers-operations";
const initialState={
    items:[],
    favorites:[],
    loading:false,
    error:null,
    page:1
}
const teachersSlice = createSlice({
    name:"teachers",
    initialState,
    reducers:{
      addToFavorites: (state,{payload}) => {
        return {
          ...state,
          favorites: [...state.favorites, payload],
        };
      },
      removeFromFavorites: (state, {payload}) => {
        return {
          ...state,
          favorites: state.favorites.filter((favorite) => favorite.id !== payload.id),
        };
      },
      savePage(state, {payload}) {
        state.page = payload;
      }
    },
    extraReducers: builder => {
        builder
        .addCase(fetchAll.pending, state => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchAll.fulfilled, (state,action) => {
            state.loading = false;
            state.items= action.payload;
            state.error = null;
})
.addCase(fetchAll.rejected, (state, { payload }) => {
    state.loading = false;
    state.error = payload;
  })
}
});
export const { addToFavorites, removeFromFavorites,savePage}= teachersSlice.actions;
export const teachersReducer=teachersSlice.reducer;