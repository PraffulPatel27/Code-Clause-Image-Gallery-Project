import React from 'react';
import London from '../assets/nature.jpg'
import Coffe from '../assets/coffe.jpg'
import Bird from '../assets/bird.jpg'
import Boat from '../assets/boat.jpg'
import Cake from '../assets/cake.jpg'
import Dog from '../assets/dog.jpg'
import Lake from '../assets/lake.jpg'
import Mountain from '../assets/Mountain.jpg'
import Space from '../assets/space.jpg'
import Nature2 from '../assets/nature2.jpg'
import Star from '../assets/star.jpg'
import Temple from '../assets/temple.jpg'

function ImageCard({ image }) {
    return (
        <>
          <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
        </>
    );
}

export default ImageCard;