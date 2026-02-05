import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchlogs = createAsyncThunk(
    "logs/fetchlogs", async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return [{ id: 1, activity: "Car Travel", carbon: 4 },
                { id: 2, activity: "Electricity Usage", carbon: 6 },
                { id: 3, activity: "Cycling", carbon: 0 },
                { id: 4, activity: "Bus Travel", carbon: 3 },
                { id: 5, activity: "Solar Energy Usage", carbon: 1 },
                { id: 6, activity: "Flight Travel", carbon: 8 }];
})

const logslice = createSlice({
    name: "logs",
    initialState: {
        data:[],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchlogs.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchlogs.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.data = action.payload;
        })
        .addCase(fetchlogs.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    },
});
export default logslice.reducer;