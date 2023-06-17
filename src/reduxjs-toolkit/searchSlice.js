import { createSlice } from '@reduxjs/toolkit';
import {searchAPI} from '../api/api'

const searchSlice = createSlice({
  name: 'search',
  initialState: { 
    orState: false,
    orValue: "any",
    opState : false,
    opValue : "any",
    words : "",
    images: [ ],
    totalCount: 0
  },

  reducers: {

    funOrValue: (state, action) => { state.orValue = action.payload ; state.orState = !state.orState; },
    funOrState: (state, action) => { state.orState = !action.payload; },
    funOpState: (state, action) => { state.opState = !state.opState; },
    funOpValue: (state, action) => { state.opValue = action.payload ; state.opState = !state.opState; },
    setImages: (state, action) => { state.images = action.payload ; },
  },
});

export const getImages = (page,count,words,format,orientations) => {
    return (dispatch) => {
        searchAPI.getImages(page,count,words,format,orientations)
        .then(data => {
            dispatch(setImages(data.images));
        });
    }
}

export const {funOrState, funOrValue, funOpState, funOpValue, setImages} = searchSlice.actions;
export default searchSlice.reducer;