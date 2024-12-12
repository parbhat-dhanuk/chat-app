import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { login, setResetStatus } from '../../redux/authSlice'
import STATUS from '../../promise/status'
import toast,{ Toaster } from 'react-hot-toast'


const Login = () => {

const [data,setData]=useState({
  username:"",
  password:""
})

const [password,setPassword]=useState('')
const dispatch=useDispatch()
const {status,message,passwordMessage}=useSelector((state)=>state.auth)
const navigate=useNavigate()


const handleChange=(e)=>{
  setData({
    ...data,
    [e.target.name]:e.target.value
  })
}

const handleSubmit=(e)=>{
 e.preventDefault()
 dispatch(login(data))
}

if(message==="**Invalid password**"){
  return
}

if(status===STATUS.success){
  dispatch(setResetStatus())
  toast.success('Login Successfully.')

  setTimeout(()=>{
    navigate('/chat')
  },1000)
  
}


  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <Toaster/>
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <img
        className="mx-auto h-10 w-auto"
        src="https://www.svgrepo.com/show/301692/login.svg"
        alt="Workflow"
      />
      <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
        Login account
      </h2>
      <p className="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
        OR
        <br></br>
        <Link
          to="/register"
          className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
        >
          Register to your account
        </Link>
      </p>
    </div>

    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form onSubmit={handleSubmit}>
        
          <div className="mt-6">
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-5  text-gray-700"
            >
              User Name
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                onChange={handleChange}
                id="username"
                name="username"
                placeholder="John Doe"
                type="text"
                required=""
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
             
            </div>
             {/* Invalid username validation */}
             <p className='text-red-700 font-serif text-sm'>{message}</p>
          </div>

       

          <div className="mt-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Password
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                onChange={handleChange}
                id="password"
                name="password"
                type="password"
                required=""
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>

             {/* Invalid password validation */}
             <p className='text-red-700 font-serif text-sm'>{passwordMessage}</p>
          </div>

         

          <div className="mt-6">
            <span className="block w-full rounded-md shadow-sm">
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              >
                Login
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>  
    
  )
}

export default Login