import { useState } from 'react'
import { GrLogout } from 'react-icons/gr'
import { useNavigate } from 'react-router-dom'
import API from '../../https'


const LogoutButton = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      localStorage.removeItem('access-token')
      await API.post('/logout',{}, { withCredentials: true })
      setIsLoggedIn(false)
      navigate('/')
    } catch (error) {
      console.error('Error logging out:', error)
    }
  }

  return <GrLogout onClick={handleLogout} className="h-7 w-10" />
}
export default LogoutButton
