import { createSlice } from "@reduxjs/toolkit";
import API from "../https";
import STATUS from "../promise/status";

const authSlice=createSlice({
    name:"auth",
    initialState:{
        user:"",
        status:"",
        message:"",
        passwordMessage:''
    },
    reducers:{
        setUser(state,action){
            state.user=action.payload
        },
        setStatus(state,action){
           state.status=action.payload
        },
        setResetStatus(state){
            state.status=""
        },
        setMessage(state,action){
          state.message=action.payload
        },
        setPassword(state,action){
          state.passwordMessage=action.payload
        }
    }
})

export const {setUser,setStatus,setResetStatus,setMessage,setPassword}=authSlice.actions

export default authSlice.reducer



export function register(data){
    return async function registerThunk(dispatch){
  try {
    dispatch(setStatus(STATUS.loading))
   const response = await API.post('/signup',data)
    if(response.status===201){
      dispatch(setStatus(STATUS.success))
      dispatch(setUser(data))  
    }
  } catch (error) {
    dispatch(setMessage((error.response.data.message)))
  }
    }
}


export function login(data){
  return async function loginThunk(dispatch){
try {
  dispatch(setStatus(STATUS.loading))
 const response = await API.post('/login',data,{ withCredentials: true })
  if(response.status===200){
    dispatch(setStatus(STATUS.success))
    localStorage.setItem("access-token",response.data.token)
  }
} catch (error) {
  dispatch(setMessage((error.response.data.message)))
  dispatch(setPassword((error.response.data.error)))
}
  }
}