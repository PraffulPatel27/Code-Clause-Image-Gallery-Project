import React, { useState } from "react";
import ImageCard from "./Image-Card"; // Make sure to import the ImageCard component

const GalleryFilter = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    };

    return (
        <>
            {/********** Gallery Filter ***********/}
            <div className="max-w-7xl mx-auto p-4">
                <h1 className="mt-8 mb-10 text-center main-heading text-gray-800 text-3xl font-bold">
                    Choose Your Favorite Images
                </h1>
          
                <div className="flex justify-center sm:space-x-0 space-x-4 my-4">
                    {["All", "Nature", "City", "Food", "Animal"].map((category) => (
                        <button 
                            key={category}
                            className={`btn ${activeCategory === category ? 'btn-primary' : 'btn-warning'}`}
                            onClick={() => handleCategoryClick(category)}
                        >
                            {/* <span className="inline-block rounded border border-blue-500 bg-blue-500 px-6 py-2 text-sm font-medium text-white focus:outline-none active:text-blue-500 active:bg-white active:border-blue-500">
                                {category}
                            </span> */}
                            <span className={`
                                inline-block rounded border px-6 py-2 text-sm font-medium focus:outline-none
                                ${activeCategory === category 
                                    ? 'border-blue-500 bg-white text-blue-500' 
                                    : 'border-blue-500 bg-blue-500 text-white hover:bg-blue-600'
                                }
                            `}>
                                {category}
                            </span>
                        </button>
                    ))}
                </div>

                <ImageCard activeCategory={activeCategory} />
            </div>
        </>
    );
}

export default GalleryFilter;