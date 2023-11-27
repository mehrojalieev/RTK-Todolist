import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const taskSlice = createApi({
    reducerPath: "api",
    tagTypes: ["Tasks"],
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:2000" }),
    endpoints: (builder) => ({
        getTask: builder.query({
            query: () => "./tasks",
            providesTags: ["Tasks"]
        }),
        createTask: builder.mutation({
            query: (task) => ({
                url: "/tasks",
                method: "POST",
                body: task
            }),
            invalidatesTags: ["Tasks"]
        }),
        deleteTask: builder.mutation({
            query: (task) => ({
                url: `/task/${task.id}`,
                method: "DELETE",
                body: task
            })
        })
    })
})

export const {useGetTaskQuery ,useCreateTaskMutation, useDeleteTaskMutation} = taskSlice