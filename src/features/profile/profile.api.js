import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from '../../app/config'

export const getProfileDetail = createAsyncThunk('profile/getProfileDetail', async (id, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${baseUrl}/users/${id}`)
        return response.data
    } catch (error) {
        console.log(error.response, 'error response')
        return rejectWithValue(error)
    }
})


export const getProfileRepos = createAsyncThunk('profile/getProfileRepos', async (id, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${baseUrl}/users/${id}/repos`, {
            params: {
                per_page: 1000
            }
        })
        return response.data
    } catch (error) {
        console.log(error.response, 'error response')
        return rejectWithValue(error)
    }
})

export const getRepoDetail = createAsyncThunk('profile/getRepoDetail', async (ids, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${baseUrl}/repos/${ids.id}/${ids.repoId}`)
        return response.data
    } catch (error) {
        console.log(error.response, 'error response')
        return rejectWithValue(error)
    }
})


export const getReadme = createAsyncThunk('profile/getReadme', async (ids, { rejectWithValue }) => {
    try {
        const response = await axios.get(`https://raw.githubusercontent.com/${ids?.id}/${ids?.repoId}/${ids?.default_branch}/README.md`)
        return response.data
    } catch (error) {
        console.log(error.response, 'error response')
        return rejectWithValue(error)
    }
})