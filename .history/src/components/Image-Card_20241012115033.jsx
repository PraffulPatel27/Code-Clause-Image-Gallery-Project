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
import Citie from '../assets/City.jpg'

const images = [
  { src: Boat, alt: "Boat", category: "Nature" },
  { src: Space, alt: "Space", category: "Nature" },
  { src: Nature2, alt: "Nature2", category: "Nature" },
  { src: Lake, alt: "Lake", category: "Nature" },
  { src: Mountain, alt: "Mountain", category: "Nature" },
  { src: Star, alt: "Star", category: "Nature" },
  { src: Boat, alt: "Boat", category: "Food" },

  { src: Coffe, alt: "Coffee", category: "Food" },
  { src: Cake, alt: "Cake", category: "Food" },

  { src: Bird, alt: "Bird", category: "Animal" },
  { src: Dog, alt: "Dog", category: "Animal" },

  { src: London, alt: "London", category: "City" },
  { src: Citie, alt: "Citie", category: "City" },
  { src: Temple, alt: "Temple", category: "City" },
];

function ImageCard({ activeCategory }) {
    const filteredImages = activeCategory === "All" 
        ? images 
        : images.filter(img => img.category === activeCategory);

    return (
        <div className="max-w-7xl mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredImages.map((image, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out relative">
                        <img src={image.src} alt={image.alt} loading='lazy' className="w-full h-full object-cover" />
                        <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold text-white opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
                            {image.alt}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ImageCard;