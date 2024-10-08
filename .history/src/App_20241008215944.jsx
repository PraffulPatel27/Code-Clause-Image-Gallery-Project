import React from 'react';
import './App.css';
import { useState } from 'react'
import London from './assets/nature.jpg'
import Coffe from './assets/coffe.jpg'
import Bird from './assets/bird.jpg'
import Boat from './assets/boat.jpg'
import Cake from './assets/cake.jpg'
import Dog from './assets/dog.jpg'
import Lake from './assets/lake.jpg'
import Mountain from './assets/Mountain.jpg'
import Space from './assets/space.jpg'
import Nature2 from './assets/nature2.jpg'
import Star from './assets/star.jpg'
import Temple from './assets/temple.jpg'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      {/* Nav bar */}
      <div>
        <header className="border-b border-gray-200 bg-gray-50">
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-5 lg:px-8">
    <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Image Gallery</h1>
      </div>

      <div className="flex items-center gap-4">
        <button
          className="inline-flex items-center justify-center gap-1.5 rounded border border-gray-200 bg-white px-5 py-3 text-gray-900 transition hover:text-gray-700 focus:outline-none focus:ring"
          type="button"
        >
          <span className="text-sm font-medium"> Join us </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </button>

        <button
          className="inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
          type="button"
        >
          Contact us
        </button>
      </div>
    </div>
  </div>
        </header> 
      </div>

    
     {/* main section here */}
     <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out">
          <img src={London} alt="Image 1" loading='lazy' className="w-full h-full object-cover" />
          <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold text-white opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
            London
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out">
          <img src={Coffe} alt="Image 2" loading='lazy' className="w-full h-full object-cover" />
          <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold text-white opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
            Coffe
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out"> 
          <img src={Bird} alt="Image 3" loading='lazy' className="w-full h-full object-cover" />
          <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold text-white opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
            Bird
          </div>  
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out">
          <img src={Boat} alt="Image 4" loading='lazy' className="w-full h-full object-cover" />
          <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold text-white opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
            Boat
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out">
          <img src={Cake} alt="Image 5" loading='lazy' className="w-full h-full object-cover" />
          <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold text-white opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
            Cake
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out">
          <img src={Dog} alt="Image 6" loading='lazy' className="w-full h-full object-cover" />
          <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold text-white opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
            City  
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out">
          <img src={Nature2} alt="Image 7" loading='lazy' className="w-full h-full object-cover" />
          <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold text-white opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
            Lake
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out">
          <img src={Star} alt="Image 8" loading='lazy' className="w-full h-full object-cover" />
          <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold text-white opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
            Mountains
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out">
          <img src={Temple} alt="Image 9" loading='lazy' className="w-full h-full object-cover" />
          <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold text-white opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
            Sea
          </div>
        </div>

      </div>
    </div>
    </div>
    </>
  )
}

export default App
