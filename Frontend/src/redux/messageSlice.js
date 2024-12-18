import { createSlice } from "@reduxjs/toolkit";
import API from "../https";
import STATUS from "../promise/status";

const messageSlice=createSlice({
    name:"message",
    initialState:{
        message:"",
        status:""
    },
    reducers:{
        setMessages(state,action){
            state.message=action.payload
        },
        setStatus(state,action){
           state.status=action.payload
        },
        setResetStatus(state){
            state.status=""
        }
      
    }
})

export const {setMessages,setStatus,setResetStatus}=messageSlice.actions

export default messageSlice.reducer

//send message

export function sendMessage(message,id){
    return async function sendMessageThunk(dispatch){
        
  try {
    dispatch(setStatus(STATUS.loading))
   const response = await API.post(`/message/send/${id}`,message,{withCredentials:true})
    if(response.status===200){
      dispatch(setStatus(STATUS.success))
      dispatch(setMessages(response.data.newMessage))  
    }
  } catch (error) {
   dispatch(setStatus(STATUS.error))
  }
    }
}