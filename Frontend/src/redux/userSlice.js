import { createSlice } from "@reduxjs/toolkit";
import API from "../https";
import STATUS from "../promise/status";

const userSlice=createSlice({
    name:"user",
    initialState:{
        users:"",
        status:""
    },
    reducers:{
        setUser(state,action){
            state.users=action.payload
        },
        setStatus(state,action){
           state.status=action.payload
        },
        setResetStatus(state){
            state.status=""
        }
      
    }
})

export const {setUser,setStatus,setResetStatus}=userSlice.actions

export default userSlice.reducer

//get user

export function getUser(){
    return async function getUserThunk(dispatch){
  try {
    dispatch(setStatus(STATUS.loading))
   const response = await API.get('/get/users',{withCredentials:true})
    if(response.status===200){
      dispatch(setStatus(STATUS.success))
      dispatch(setUser(response.data.filteredUsers))  
    }
  } catch (error) {
   dispatch(setStatus(STATUS.error))
  }
    }
}