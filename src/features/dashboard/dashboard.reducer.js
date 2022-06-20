import { createSlice } from "@reduxjs/toolkit";
import { getListProfile } from "./dashboard.api";


const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: {
        listProfile: [],
        loading: false,
    },
    extraReducers: {
        [getListProfile.pending]: (state, action) => {
            state.loading = true
        },
        [getListProfile.fulfilled]: (state, { payload }) => {
            // console.log(payload)
            state.loading = false
            state.listProfile = payload.items
        },
        [getListProfile.rejected]: (state, action) => {
            state.loading = false
            state.listProfile = []
        },
    }

})

export default dashboardSlice.reducer