import React from "react";

import Hero from "../assets/hero.png";
import Products from "../components/Product";
import News from "../components/News";

import Women from "../assets/gallery1.jpg";
import Men from "../assets/gallery2.jpg";
import Yoga from "../assets/gallery3.jpg";

import { FaPlay } from "react-icons/fa";
import ImageGallery from "../components/ImageGallery";

const Home = () => {
  return (
    <>
      {/* Hero */}
      <div className="bg-[var(--dark)] text-white px-12 grid grid-cols-1 md:grid-cols-2 py-10 md:py-5 lg:py-0">
        <div className="flex flex-col justify-center gap-3 px-0 md:px-12 lg:px-[100px]">
          <h1 className="uppercase font-bold text-[45px] md:text-[52px] leading-[1.1]">
            Try to <br />
            Change!
          </h1>
          <div>
            <button
              type="button"
              className="py-2 px-9 font-semibold border-white border text-sm rounded-sm hover:bg-white hover:text-blue-600 duration-200"
            >
              Shop Now
            </button>
          </div>
        </div>
        <div className="hidden md:block lg:block h-full overflow-hidden grayscale">
          <img className="object-cover w-full" src={Hero} alt="" />
        </div>
      </div>

      <div className="py-[110px] px-0 md:px-12 lg:px-[90px]">
        <div className="text-center">
          <h1 className="font-bold text-4xl">Gym Fashion</h1>
          <p className="uppercase font-medium text-[var(--dark)] my-2">
            Just For You
          </p>
        </div>

        <div className="flex flex-col md:flex-row lg:flex-row items-center gap-7 my-9 px-12 md:px-0 lg:px-0">
          <div className="cursor-pointer my-5">
            <div className="overflow-hidden">
              <img
                className="fashion-img object-cover w-full aspect-[2/1.5] md:aspect-square hover:scale-110 duration-700"
                src={Men}
                alt=""
              />
            </div>
            <h2 className="capitalize font-semibold text-2xl text-blue-600 text-center mt-4">
              Men Fashion
            </h2>
          </div>
          <div className="cursor-pointer my-5">
            <div className="overflow-hidden">
              <img
                className="fashion-img object-cover w-full aspect-[2/1.5] md:aspect-square hover:scale-110 duration-700"
                src={Women}
                alt=""
              />
            </div>
            <h2 className="capitalize font-semibold text-2xl text-blue-600 text-center mt-4">
              Women Fashion
            </h2>
          </div>
        </div>
      </div>

      {/* Products */}
      <h1 className="text-center text-4xl mb-5 text-gray-700 font-semibold">
        Staff.Pick
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-0 md:px-12 lg:px-[90px]">
        {Products.map((product, index) => (
          <div
            className="my-5 px-3 md:px-0 lg:px-0 cursor-pointer"
            key={product.id}
          >
            <div className="overflow-hidden flex justify-center">
              <img
                className="w-[95%] object-cover hover:scale-110 duration-500"
                src={product.image}
                alt={product.name}
              />
            </div>
            <div className="text-center mt-4">
              <h6 className="text-black lg:text-gray-700 text-sm font-semibold lg:font-normal">
                {product.name}
              </h6>
              <p className="font-semibold text-xl">${product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/*  */}
      <div className="subClass relative my-[90px] z-0">
        <div className="w-full h-full absolute left-0 top-0 bg-[rgba(0,0,0,0.4)] -z-10"></div>
        <div className="flex flex-col lg:flex-row items-center md:items-start lg:items-center gap-9 py-[80px] px-0 md:px-12 lg:px-[90px]">
          <div className="flex-1 flex justify-center items-center relative">
            <img
              className="object-cover w-full rounded-3xl px-3 md:px-0 lg:px-0"
              src={Yoga}
              alt=""
            />
            <span className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-blue-600 bg-white p-4 rounded-full shadow-xl cursor-pointer">
              <FaPlay />
            </span>
          </div>
          <div className="flex-1 lg:flex-[0.7] flex flex-col justify-center ml-12 gap-9">
            <h1 className="text-white text-4xl font-semibold">
              Accessories Sale
            </h1>
            <h3 className="text-white font-semibold text-xl hover:text-blue-600 duration-200 cursor-pointer">
              Shop Now
            </h3>
          </div>
        </div>
      </div>

      {/* Latest News */}
      <h1 className="text-center text-4xl my-12 text-black font-semibold">
        Latest News
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-0 px-0 md:px-12 lg:px-[90px]">
        {News.map((item, index) => (
          <div
            className="cursor-pointer my-5 lg:m-0 px-3 md:px-0 lg:px-0"
            key={item.id}
          >
            <div className="overflow-hidden">
              <img
                className="w-full object-cover lg:w-[90%] hover:scale-110 duration-500"
                src={item.image}
                alt=""
              />
            </div>
            <div className="mt-5">
              <p className="flex items-center gap-2">
                <span className="w-[14px] h-[1px] bg-gray-600"></span>{" "}
                <span>News</span>
              </p>
              <h3 className="font-semibold text-xl">{item.desc}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Instagram Image Gallery */}
      <div className="mt-[90px] px-2 md:px-0">
        <h1 className=" text-center uppercase text-4xl font-bold">
          we are in instagram
        </h1>
        <ImageGallery />
      </div>
    </>
  );
};

export default Home;
