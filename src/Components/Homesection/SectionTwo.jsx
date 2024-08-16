'use client'

import Image from 'next/image';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules'
import one from '../Images/1.png'
import five from '../Images/5.png'
const SectionTwo = () => {
  return (
    <div>
        <div>
            <h2 className='flex text-black font-bold text-4xl px-5 py-[5%] ml-10'>Discover more.
                <span className='text-gray-700'>Good things are waiting for you</span>
            </h2>
        </div>
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='ml-10'>
            <div className='flex p-5 px-10 items-center rounded-lg gap-4 bg-gray-800'>
                <div className='w-[100%] text-left'>
                    <p>Explore new arrivals</p>
                    <h2 className='text-xl font-bold py-3 '>Shop the latest <br /> from top brands </h2>
                    <button className='bg-white p-3 mt-5 px-5 rounded-full text-sm'>show me all</button>
                </div>

                <div className='w-[100%] '>
                    <Image src={one} alt=""  height={0} width={0}/>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
           <div className='flex p-5 px-10 items-center rounded-lg gap-4 bg-orange-500'>
                <div className='w-[100%] text-left'>
                    <p>Digital Gift cards</p>
                    <h2 className='text-xl font-bold py-3 '>Give the Gift<br /> Of choice</h2>
                    <button className='bg-white p-3 mt-5 px-5 rounded-full text-sm'>show me all</button>
                </div>

                <div className='w-[100%] '>
                    <Image src={five} alt=""  height={0} width={0}/>
                </div>
            </div>
        </SwiperSlide>
        
            
        <SwiperSlide>
            <div className='flex p-5 px-10 items-center rounded-lg gap-4 bg-gray-800'>
                <div className='w-[100%] text-left'>
                    <p>Explore new arrivals</p>
                    <h2 className='text-xl font-bold py-3 '>Shop the latest <br /> from top brands </h2>
                    <button className='bg-white p-3 mt-5 px-5 rounded-full text-sm'>show me all</button>
                </div>

                <div className='w-[100%] '>
                    <Image src={one} alt=""  height={0} width={0}/>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
           <div className='flex p-5 px-10 items-center rounded-lg gap-4 bg-orange-500'>
                <div className='w-[100%] text-left'>
                    <p>Digital Gift cards</p>
                    <h2 className='text-xl font-bold py-3 '>Give the Gift<br /> Of choice</h2>
                    <button className='bg-white p-3 mt-5 px-5 rounded-full text-sm'>show me all</button>
                </div>

                <div className='w-[100%] '>
                    <Image src={five} alt=""  height={0} width={0}/>
                </div>
            </div>
            
        </SwiperSlide>
        
      </Swiper>
    </div>
  )
}

export default SectionTwo