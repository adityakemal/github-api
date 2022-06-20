import { createSlice } from "@reduxjs/toolkit";
import { getProfileDetail, getProfileRepos, getReadme, getRepoDetail } from "./profile.api";


const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        detailProfile: {},
        detailRepo: {},
        listRepos: [],
        loading: false,
        readmeData: ''
    },
    extraReducers: {
        [getProfileDetail.pending]: (state, action) => {
            state.loading = true
        },
        [getProfileDetail.fulfilled]: (state, { payload }) => {
            // console.log(payload)
            state.loading = false
            state.detailProfile = payload
        },
        [getProfileDetail.rejected]: (state, action) => {
            state.loading = false
            state.detailProfile = {}
        },
        [getProfileRepos.pending]: (state, action) => {
            state.loading = true
        },
        [getProfileRepos.fulfilled]: (state, { payload }) => {
            // console.log(payload, 'repos')
            state.loading = false
            state.listRepos = payload
        },
        [getProfileRepos.rejected]: (state, action) => {
            state.loading = false
            state.listRepos = []
        },

        [getRepoDetail.pending]: (state, action) => {
            state.loading = true
        },
        [getRepoDetail.fulfilled]: (state, { payload }) => {
            // console.log(payload)
            state.loading = false
            state.detailRepo = payload
        },
        [getRepoDetail.rejected]: (state, action) => {
            state.loading = false
            state.detailRepo = {}
        },
        [getReadme.pending]: (state, action) => {
            state.loading = true
        },
        [getReadme.fulfilled]: (state, { payload }) => {
            // console.log(payload)
            state.loading = false
            state.readmeData = payload
        },
        [getReadme.rejected]: (state, action) => {
            state.loading = false
            state.readmeData = ''
        },


    }

})

export default profileSlice.reducer