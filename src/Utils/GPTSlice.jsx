import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const GPTSlice = createSlice(
    {
        name: "gpt",
        initialState: {
            showGPTSearch:false,
        },
        reducers: {
            toggleGPTSearchView: (state)=>{
                state.showGPTSearch = !state.showGPTSearch;
            }
        }
      }
) 

export const {toggleGPTSearchView} = GPTSlice.actions;

export default GPTSlice.reducer;
