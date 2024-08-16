
'use client'

import React, { useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

import Image from 'next/image'
import logo from '../Components/Images/logo.svg'
import { FiSearch } from "react-icons/fi";
import { GoPerson } from "react-icons/go";  
import { FaShoppingBasket } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";




const Navbar = () => {

  const [showDropDown, setShowDropDown] = useState(false)
  const [showDropDownInner, setShowDropDownInner] = useState(false)

  const toggleDropdown = () => {
    setShowDropDown(!showDropDown)
  }

  const toggleDropdownInner = () => {
    setShowDropDownInner(!showDropDownInner)
  }
  return (
    <div className='flex shadow-[0_3px_10px_rgb(0,0,0,0.2)] justify-between px-[10rem] bg-white py-5 z-50 fixed w-full'>

      <div>
        <Image className='w-32 ' src={logo} alt='logo' width={0} height={0}/>
      </div>
       
        <ul className='flex gap-8 relative' >
            <li className='hover:bg-neutral-200 rounded-full px-3 py-2 cursor-pointer hover:transition-all hover:ease-linear'>Men</li>
            <li className='hover:bg-neutral-200 rounded-full px-3 py-2 cursor-pointer hover:transition-all hover:ease-linear'>Women</li>
            <li className='hover:bg-neutral-200 rounded-full px-3 py-2 cursor-pointer hover:transition-all hover:ease-linear'>Beauty</li>
            <li className='hover:bg-neutral-200 rounded-full px-3 py-2 cursor-pointer hover:transition-all hover:ease-linear'>Sport</li>
            <li className='hover:bg-neutral-200 rounded-full px-3 py-2 cursor-pointer hover:transition-all hover:ease-linear flex gap-3 items-center'>Template <RiArrowDropDownLine className='text-2xl'/></li>
            <li onClick={toggleDropdown} className=' hover:bg-neutral-200 rounded-full px-3 py-2 cursor-pointer hover:transition-all hover:ease-linear flex gap-3 items-center'>
              Explore <RiArrowDropDownLine className='text-2xl'/>
            </li>

            {showDropDown === true &&
                <ul data-aos="fade-up" data-aos-duration="1000" className='absolute  text-sm flex flex-col gap-5 bg-neutral-200 top-14 right-[-8rem] p-6 w-[14rem] rounded-lg'>
                  <li className=''>Home Demo1</li>
                  <li className=''>Home Demo2</li>
                  <li  className=''>Category Page</li>
                  <li onClick={toggleDropdownInner} className='flex relative items-center cursor-pointer'>Product Page
                    <RiArrowDropDownLine className='text-2xl'/>
                    <li className=''>Cart Page </li>

                  {showDropDownInner === true &&
                    <ul data-aos="fade-left" data-aos-duration="1000" className='absolute bg-neutral-200 right-[-13rem] p-5 w-[10rem]'>
                      <li>Home</li>
                      <li>Shop</li>
                    </ul>
                  }
                  </li>
                  <li className=''>Checkout Page</li>
                </ul>
            }
        </ul>

        <div className='flex gap-7 text-2xl'>
          <p className='hover:bg-neutral-200 rounded-full px-3 py-3 cursor-pointer hover:transition-all hover:ease-linear'><FiSearch /></p>
          <p className='hover:bg-neutral-200 rounded-full px-3 py-3 cursor-pointer hover:transition-all hover:ease-linear'><GoPerson /></p>
          <p className='hover:bg-neutral-200 rounded-full px-3 py-3 cursor-pointer hover:transition-all hover:ease-linear'><FaShoppingBasket /></p>
        </div>
    </div>
  )
}

export default Navbar