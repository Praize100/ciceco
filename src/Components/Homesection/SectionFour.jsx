import React from 'react'
import Image from 'next/image'
import threee from '../Images/threeeimg.webp'
import one from '../Images/oneimg.webp'
import two from '../Images/twoimg.webp'
import three from '../Images/max.webp'
import pad from '../Images/pad.webp'
import logo from '../Images/logo.svg'


const SectionFour = () => {
  return (
    <div className=' '>
      <div className=' justify-center items-center'>
         <div className='flex  items-center justify-center gap-[10%] m-auto '>
        <div>
          <Image src={threee} alt="" width={0} height={0}/>
        </div>
        <div>
          <Image src={three} alt=""width={0} height={0} />
        </div>
        <div>
          <Image src={two} alt="" width={0} height={0}/>
        </div>
        <div>
          <Image src={one} alt=""  width={0}  height={0}/>
        </div>
      </div>
      </div>
      <div className='mt-10'>
      <ul className='flex justify-center items-center gap-[13%] '>
         <li className='bg-red-200 px-5 p-2 font-sm rounded-full text-red-700 font-bold'>Step1</li>
          <li className='bg-blue-200 px-5 p-2 font-sm rounded-full text-blue-700 font-bold'>Step2</li>
          <li className='bg-yellow-200 px-5 p-2 font-sm rounded-full text-yellow-700 font-bold'>Step3</li>
          <li className='bg-purple-300 px-5 p-2 font-sm rounded-full text-purple-700 font-bold'>Step4</li>
        </ul> 
      </div>
      <div className='flex justify-center items-center gap-[12%] mt-5'>
        <div>
          <h2 className='font-bold'>Filter & Discover</h2>
        </div>
        <div>
          <h2 className='font-bold'>Add to bag</h2>
        </div>
        <div>
          <h2 className='font-bold'>Fast shipping </h2>
        </div>
        <div>
          <h2 className='font-bold'>Enjoy the product</h2>
        </div>
      </div>

      <div className='flex justify-center items-center mt-10 gap-20'>
       <div>
       <h2>Smart filtering and suggestions</h2>
       <p className='flex justify-center'>make it easy to find</p>
       </div>

       <div>
        <h2>Smart filtering and suggestions</h2>
        <p className='flex justify-center'>make it easy to find</p>
       </div>

       <div>
        <h2>Smart filtering and suggestions</h2>
        <p className='flex justify-center'>make it easy to find</p>
       </div>

       <div>
        <h2>Smart filtering and suggestions</h2>
        <p className='flex justify-center'>make it easy to find</p>
       </div>
      </div>


      <section className='px-[10rem] py-20 flex h-[80vh] bg-white items-center mt-60'>
            <div className='w-[100%]' >
              <div>
              <Image className='w-32 ' src={logo} alt='logo' width={0} height={0}/>
              </div>
                <h2 className='text-6xl font-bold leading-[60px] py-10'>Earn free money <br /> with Ciseco</h2>
                <p className='text-lg text-gray-600 font-medium'>With Ciseco you will get freeship & savings combo...</p>
                <div className='flex gap-3 mt-5 '>
                <button className='text-white bg-gray-900 rounded-full py-3 px-5  '>Savings combo</button>
                <button className=' rounded-full py-3 px-5  text-gray-500 border-slate-400 hover:bg-neutral-300'>Discover more
                </button>
                </div>
                
                
            </div>

            <div className='ml-auto w-[100%]'>
                <Image className='w-[100%]' src={pad} alt='image' width={0} height={0}/>
            </div>
        </section>

    </div>
  )
}

export default SectionFour 