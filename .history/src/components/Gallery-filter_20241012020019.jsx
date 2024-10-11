import React from "react";

const GalleryFilter = () => {
    return (
        <>
            {/********** Gallery Filter ***********/}
        <div className="max-w-7xl mx-auto p-4">
            <h1 className="m-y-8 text-center main-heading text-gray-800 text-3xl font-bold">
              Choose Your Favorite Images
            </h1>
            {/* <hr></hr> */}

          
          <div className="grid grid-cols-5 lg:gap-x-[-10rem]">

            {/* <div className="mt-5 text-center main-heading"> */}
                {/* <div className="menu-tab d-flex justify-content-around"> */}
                    
                    <button className="btn btn-warning">
                     <a
                      className="inline-block rounded border border-[#feb900] bg-[#feb900] px-6 py-2 text-sm font-medium text-white focus:outline-none active:text-[#feb900]"
                      href="#">
                      All
                     </a>
                    </button>

                    <button className="btn btn-warning">
                     <a
                      className="inline-block rounded border border-[#feb900] bg-[#feb900] px-6 py-2 text-sm font-medium text-white focus:outline-none active:text-[#feb900]"
                      href="#">
                      Nature
                     </a>
                    </button>
                    
                    <button className="btn btn-warning">
                     <a
                      className="inline-block rounded border border-[#feb900] bg-[#feb900] px-6 py-2 text-sm font-medium text-white focus:outline-none active:text-[#feb900]"
                      href="#">
                      City
                     </a>
                    </button>

                    <button className="btn btn-warning">
                     <a
                      className="inline-block rounded border border-[#feb900] bg-[#feb900] px-6 py-2 text-sm font-medium text-white focus:outline-none active:text-[#feb900]"
                      href="#">
                      Food
                     </a>
                    </button>

                    <button className="btn btn-warning">
                     <a
                      className="inline-block rounded border border-[#feb900] bg-[#feb900] px-6 py-2 text-sm font-medium text-white focus:outline-none active:text-[#feb900]"
                      href="#">
                      Animal
                     </a>
                    </button>
                    
                {/* </div> */}
            {/* </div> */}
          
          </div>
        </div>
        </>
    );
}

export default GalleryFilter;