import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    quotes: [],
    isLoading: false,
}

export const fetchQuotes = createAsyncThunk(
    'features/fetchQuotes',
    async(_, thunkAPI) => {
      const options = {
        method: 'GET',
        headers: { 'X-Api-Key': 'OfLmd6NHu3M738oZgj/jBg==h1MlJGB2TSBaKuQo' },
        contentType: 'application/json',
      };
      
      try {
        const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', options);
        const data = await res.json();
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue('error fetching');
      }
     
    }
)

const quoteSlice = createSlice({
    name:'quotes',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchQuotes.pending, (state)=>{
                state.isLoading = true;
            })
            .addCase(fetchQuotes.fulfilled,(state,action)=>{
                state.isLoading = false;
                state.quotes= action.payload;
            })
            .addCase(fetchQuotes.rejected, (state)=>{
                state.isLoading = false;
            })
    }
})

export default quoteSlice.reducer;
