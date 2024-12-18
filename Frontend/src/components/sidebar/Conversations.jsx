import { useEffect, useState } from 'react'
import Conversation from './Conversation'
import { useDispatch, useSelector } from 'react-redux'
import STATUS from '../../promise/status'
import { getUser, setResetStatus } from '../../redux/userSlice'

const Conversations = () => {
  const [peoples,setPeoples]=useState([])
  const {users,status}=useSelector((state)=>state.user)
  const dispatch=useDispatch()


  useEffect(()=>{
		dispatch(getUser())
	},[])

  if(status===STATUS.success){
    setPeoples(users)
    dispatch(setResetStatus())
    
       }
       


  return (
    <div className="py-2 flex flex-col overflow-auto">
     
     {
     peoples.map((people)=>{
      return  <Conversation key={people._id} user={people} />
     })
     
      }
    </div>
  )
}
export default Conversations
