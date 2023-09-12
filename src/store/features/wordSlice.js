import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    words: [],
    isLoading: false,
    searchQuery: '',
}

export const fetchWords = createAsyncThunk(
  'features/fetchWords',
  async(word,thunkAPI) => {
    try {
        const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = await res.json();
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue('error fetching');
      }
  }
)

const wordSlice = createSlice({
    name:'words',
    initialState,
    reducers: {
        setQuery: (state, action) => {
        state.searchQuery = action.payload;
    },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWords.pending, (state)=>{
                state.isLoading = true;
            })
            .addCase(fetchWords.fulfilled,(state,action)=>{
                state.isLoading = false;
                state.words= action.payload;
            })
            .addCase(fetchWords.rejected, (state)=>{
                state.isLoading = false;
            })
    }
})

export default wordSlice.reducer;
export const { setQuery } = wordSlice.actions;
