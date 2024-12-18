import { createContext,useState,useEffect } from "react";

export const SocketContext=createContext()

export const SocketContextProvider=({children})=>{
    const [socket,setSocket]=useState(null)
    const [onlineUsers,setOnlineUsers]=useState([])

    useEffect(()=>{},[])
    return (
        <SocketContext.Provider value={{}}>{children}</SocketContext.Provider>
    )
}