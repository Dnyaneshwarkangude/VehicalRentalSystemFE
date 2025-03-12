import { createSlice } from "@reduxjs/toolkit";  

const initialState = {
    status: false,
    userData : null
}
 

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        login: (state, action) =>{
            state.status = true
            state.userData = action.payload?.userData || state.userData 
        },
        logout: (state, action) =>{
            state.status = false
            state.userData = null 
        },
        updateUserData: (state, action) =>{ 
            state.userData = action.payload?.user || state.userData
        }
    }
})

export const { login, logout, updateUserData } = userSlice.actions

export default userSlice.reducer