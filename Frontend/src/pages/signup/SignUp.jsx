import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { register, setResetStatus } from '../../redux/authSlice'
import STATUS from '../../promise/status'
import toast, { Toaster } from 'react-hot-toast'

const SignUp = () => {
  const [data, setData] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: '',
  })

  const [password,setPassword]=useState('')

  const dispatch = useDispatch()
  const { status } = useSelector((state) => state.auth)
  const navigate = useNavigate()
const {message}=useSelector((state)=>state.auth)
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(data.password !== data.confirmPassword){
      setPassword({
        ...password,
        message:"**password and confirm password didn't match**"
      })
      return
   
  }
  dispatch(register(data))

  if (status === STATUS.success) {
    dispatch(setResetStatus())
    toast.success('Register Successfully!')
    setTimeout(() => {
      navigate('/login')
    }, 1000)
  }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <Toaster/>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Create a new account
        </h2>
        <p className="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
          OR
          <br></br>
          <Link
            to="/login"
            className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
          >
            login to your account
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium leading-5  text-gray-700"
              >
                Full Name
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  onChange={handleChange}
                  id="fullName"
                  name="fullName"
                  placeholder="John Doe"
                  type="text"
                  required=""
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
                <div className=" absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                 
                </div>
              </div>
            </div>

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
                <div className=" absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                
                </div>
              </div>
              {/* username already exist validation */}
              <p className='text-red-700 font-serif text-sm'>{message}</p>
            </div>

            <div className="mt-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Gender
              </label>
              <label>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="gender"
                  value="male"
                />{' '}
                Male
              </label>

              <label className="mx-2">
                <input
                  onChange={handleChange}
                  type="radio"
                  name="gender"
                  value="female"
                />{' '}
                Female
              </label>
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
            </div>

            <div className="mt-6">
              <label
                htmlFor="password_confirmation"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Confirm Password
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  onChange={handleChange}
                  id="password_confirmation"
                  name="confirmPassword"
                  type="password"
                  required=""
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
              {/* password and confirm password don't match validation */}
              <p className='text-red-700 font-serif text-sm'>{password?.message}</p>
            </div>

            <div className="mt-6">
              <span className="block w-full rounded-md shadow-sm">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                >
                  Create account
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
