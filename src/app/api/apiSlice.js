import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {setCredentials, logOut} from "../../features/auth/authSlice";
import * as buffer from "buffer";

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:8000',
    credentials: 'include', //sends cookie with every query
    prepareHeaders: (headers, {getState}) => {
        const token = getState().auth.token //we want to send our acc token every time as well
        if(token) {
            headers.set("authorization", `Bearer ${token}`)
        }
        return headers //we are attaching our acc token to the header everytime with every request
    }
})

export const apiSlice = createApi({
    baseQuery: baseQuery,
    endpoints: builder => ({})
})
