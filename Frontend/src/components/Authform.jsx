

import React from 'react'
import { Link } from 'react-router-dom'

const Authform = ({type}) => {
  return (
    <form className="max-w-sm mx-auto mt-4">

  {type==="Register"&& (<>
  
  <div className="mb-5">
    <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">FullName</label>
    <input type="fullName" id="fullName" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Jhon Doe" required />
  </div>
  <div className="mb-5">
    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">username</label>
    <input type="text" id="username" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="username" required />
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> password</label>
    <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div>
  <div className="mb-5">
    <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
    <input type="password" id="confirmPassword" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div>

  <div className="mb-5">

  <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
      <label>
            <input type="radio" name="gender" value="male"/> Male
        </label>

        <label className='mx-2'>
            <input type="radio" name="gender" value="female"/> Female
        </label>
  </div>
  
  </>)}

{type==="Login" && (<>
  <div className="mb-5">
    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">username</label>
    <input type="text" id="username" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="username" required />
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> password</label>
    <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div>
</>)}

  <div className="flex items-start mb-5">
   
   
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{type==="Register"?("Register new account"):("Login")}</button>
  <div className="flex items-center h-5 mt-3">
      {type==="Register"?("Already have account"):("Don't have account")}
      <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{type==="Register"?  ( <Link to="/login" className="text-blue-600 hover:underline dark:text-blue-500">login</Link>): ( <Link to="/register" className="text-blue-600 hover:underline dark:text-blue-500">register</Link>)}</label>
    </div>
</form>


  )
}

export default Authform