import {createSlice} from "@reduxjs/toolkit";


const UserSlice = createSlice({
    name: 'UserSlice',
    initialState: {
        users: []
    },
    reducers: {
        userPush: (state, action) => {
            state.users.push(action.payload)
        }
    }
})

export const {userPush} = UserSlice.actions
export default UserSlice.reducer
