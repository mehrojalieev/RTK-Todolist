import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const taskSlice = createApi({
    reducerPath: "api",
    tagTypes: ["Tasks"],
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:2000" }),
    endpoints: (builder) => ({
        createTask: builder.mutation({
            query: (task) => ({
                url: "/tasks",
                method: "POST",
                body: task
            })
        }),
    })
})

export const {useCreateTaskMutation} = taskSlice