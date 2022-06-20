import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from '../../app/config'




export const getListProfile = createAsyncThunk('dashboard/getListProfile', async (paramsValue, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${baseUrl}/search/users`, {
            params: {
                per_page: 100,
                q: paramsValue
            }
        })
        return response.data
    } catch (error) {
        console.log(error.response, 'error response')
        return rejectWithValue(error)
    }
})