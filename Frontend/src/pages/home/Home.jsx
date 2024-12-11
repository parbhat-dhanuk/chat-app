import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
 
  return (
    <main className="dark:bg-gray-800 bg-white relative overflow-hidden h-screen">
    <header className="h-24 sm:h-32 flex items-center z-30 w-full">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="uppercase text-gray-800 dark:text-white font-black text-3xl">
          CHAT.ME
        </div>
        <div className="flex items-center">
          {/* Navigation */}
          <nav
            className={`font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <Link to="/login" className="py-2 px-6 flex">
              Login
            </Link>
            <Link to="/register" className="py-2 px-6 flex">
              Signup
            </Link>
          </nav>

          {/* Hamburger Button */}
          <button
            className="lg:hidden flex flex-col ml-4"
            onClick={toggleMenu}
          >
            <span
              className={`w-6 h-1 bg-gray-800 dark:bg-white mb-1 transition-transform ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-1 bg-gray-800 dark:bg-white mb-1 transition-opacity ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-1 bg-gray-800 dark:bg-white mb-1 transition-transform ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>
    </header>

    <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
      <div className="container mx-auto px-6 flex relative py-16">
        <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
          <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
          <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
            Stay
            <span className="text-5xl sm:text-7xl">connected</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-700 dark:text-white">
            Our chat app offers real-time messaging, group chats, and seamless
            sharing of photos and files. Chat anytime, anywhere!
          </p>
        </div>
        <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
          <img
            src="https://img.freepik.com/free-vector/dating-app-chat-interface-template-set_23-2148530299.jpg?t=st=1732425173~exp=1732428773~hmac=6e2d693338e25742e0bb012ef45ecc22b55c988f0b537695c41778b7140b8160&w=740"
            className="max-w-xs md:max-w-sm m-auto"
            alt="Chat App"
          />
        </div>
      </div>
    </div>
  </main>
  )
}

export default Home