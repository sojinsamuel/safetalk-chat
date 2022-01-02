import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  SuccessMessage,
  User,
  RoomCode,
  FileName,
  FetchUsers
} from '../../lib/interfaces'
import { ROUTES, ENDPOINTS } from '../../lib/enums'

export const roomApi = createApi({
  reducerPath: 'roomApi',
  baseQuery: fetchBaseQuery({
    baseUrl: ENDPOINTS.BACKEND_URL,
    prepareHeaders: (headers: Headers) => {
      headers.set('Content-Type', 'application/json')
      headers.set('Accept', 'application/json')
      return headers
    }
  }),
  endpoints: builder => ({
    createUser: builder.mutation({
      query: (user: User) => ({
        method: 'POST',
        url: `${ROUTES.CREATE_USER}`,
        body: user
      })
    }),
    fetchRooms: builder.query<Array<string>, void>({
      query: () => ({ url: `${ROUTES.GET_ROOMS}`, method: 'GET' })
    }),
    fetchUsers: builder.query<FetchUsers, string>({
      query: (roomCode: string) => ({
        url: `rooms/${roomCode}/users`,
        method: 'GET'
      })
    }),
    createRoom: builder.mutation<SuccessMessage, User>({
      query: (user: User) => ({
        method: 'POST',
        url: ROUTES.CREATE_ROOM,
        body: user
      })
    }),
    joinRoom: builder.mutation<SuccessMessage, User>({
      query: (user: User) => ({
        method: 'POST',
        url: ROUTES.JOIN_ROOM,
        body: user
      })
    }),
    uploadFile: builder.mutation<FileName, { file: File; roomCode: RoomCode }>({
      query: ({ file, roomCode }) => ({
        method: 'POST',
        url: `rooms/${roomCode}/files`,
        headers: { 'Content-Type': 'multipart/form-data' },
        body: { file }
      })
    }),
    fetchFile: builder.query<
      File,
      { fileName: FileName; mimeType: string; roomCode: RoomCode }
    >({
      query: ({ fileName, mimeType, roomCode }) => ({
        method: 'GET',
        url: `rooms/${roomCode}/files/${fileName}`,
        headers: { 'Content-Type': mimeType }
      })
    }),
    streamMedia: builder.query<
      MediaStream,
      { media: string; range: string; mimeType: string; roomCode: RoomCode }
    >({
      query: ({ media, range, roomCode, mimeType }) => ({
        method: 'GET',
        url: `rooms/${roomCode}/files/stream/${media}`,
        headers: { Range: range, 'Content-Type': mimeType }
      })
    })
  })
})
export const {
  useCreateUserMutation,
  useCreateRoomMutation,
  useFetchRoomsQuery,
  useLazyFetchUsersQuery,
  useJoinRoomMutation
} = roomApi
