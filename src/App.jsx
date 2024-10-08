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

    
     
    </div>
    </>
  )
}

export default App
