    import React from "react";
    import CoffeeGuy from "../assets/OurBlog/CoffeeGuy.jpg";
    import Espresso from "../assets/OurBlog/espresso.jpg";

    const OurBlog = () => {
    return (
        <div className="bg-gray-100 py-16 px-5 lg:px-60">
        <h1 className="font-Kanit text-4xl text-gray-800 font-semibold mb-10">
            OUR BLOG
        </h1>
        {/* 2 CARDS */}
        <div className="flex gap-5">
            {/* CARDS */}
            <div className="text-center">
            <div className="shadow-lg rounded-xl overflow-hidden">
                <img
                src={CoffeeGuy}
                alt="Coffee Preparation"
                className="w-full lg:w-[500px] object-cover"
                />
                <div className="p-5 bg-white w-[500px]">
                <h1 className="font-Kanit font-semibold text-start text-2xl text-gray-900">
                    PREP TECHNIQUES Coffee
                </h1>
                <p className="font-Kanit text-start text-gray-700 mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Cupiditate eos voluptate officiis sunt, adipisci repellendus
                    earum laudantium accusantium aspernatur eaque ex nesciunt. Fugit
                    quo delectus accusamus quaerat quas natus iste.
                </p>
                </div>
            </div>
            <button className="text-red-600 text-xs md:text-sm lg:text-base w-52 mt-5 font-Kanit border border-red-600 hover:text-black hover:border-black duration-200 rounded-lg px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4">
                READ MORE
            </button>
            </div>
            <div className="text-center">
            <div className="shadow-lg rounded-xl overflow-hidden">
                <img
                src={Espresso}
                alt="Coffee Preparation"
                className="w-full lg:w-[500px] h-[333px] object-cover"
                />
                <div className="p-5 bg-white w-[500px]">
                <h1 className="font-Kanit font-semibold text-start text-2xl text-gray-900">
                    PREP TECHNIQUES Coffee
                </h1>
                <p className="font-Kanit text-start text-gray-700 mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Cupiditate eos voluptate officiis sunt, adipisci repellendus
                    earum laudantium accusantium aspernatur eaque ex nesciunt. Fugit
                    quo delectus accusamus quaerat quas natus iste.
                </p>
                </div>
            </div>
            <button className="text-red-600 text-xs md:text-sm lg:text-base w-52 mt-5 font-Kanit border border-red-600 hover:text-black hover:border-black duration-200 rounded-lg px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4">
                READ MORE
            </button>
            </div>
        </div>
        </div>
    );
    };

    export default OurBlog;
