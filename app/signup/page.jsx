'use client'

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { mainImg } from '@/public/img';
import { AnimationWrapper } from '../components';




const Signup = () => {


  return (
    <>
    <section id='signup'>
      <div className='flex flex-col md:flex-row items-center justify-center px-16 py-10 md:px-16 md:py-10'>

        {/* Sign in and Sign up box */}

        <div className='font-medula bg-white xl:w-[750px] md:w-[600px] sm:w-[500px] w-[300px] px-36 py-36 rounded-2xl'>
          <div className='mt-[-7rem] text-center'>
            <h1 className='font-regular xl:ml-0 lg:ml-0 md:ml-0 sm:ml-[1rem] ml-[-4rem] text-9xl text-[#DBCEBB]'>
            AISA
            </h1>
          </div>
          

          <div className='py-7 flex items-center text-center justify-center'>
            <Link href='/signin'>
            <h5 className='mr-28 text-[#989898] font-regular text-3xl hover:text-[#242D3C] ease-in-out duration-500 cursor-pointer'>
              Sign In
            </h5>
            </Link>
          
            <h5 className='text-[#242D3C] border-b-[3px] border-[#DBCEBB] font-regular text-3xl  ease-in-out duration-500 cursor-pointer'>
              Sign Up
            </h5>
          </div>

    <AnimationWrapper>
        <div data-aos='fade-up'>

          <input className='text-xl h-[41px] xl:w-[344px] lg:w-[333px] md:w-[325px] w-[250px] xl:ml-0 lg:ml-0 md:ml-0 sm:ml-[-1.25rem] ml-[-7.5rem] border-[2px] pl-3 pr-32  rounded-lg' type="text" placeholder='Full Name' />
          <br />
          <br />
          <input className='text-xl h-[41px] xl:w-[344px] lg:w-[333px] md:w-[325px] w-[250px] xl:ml-0 lg:ml-0 md:ml-0 sm:ml-[-1.25rem] ml-[-7.5rem] border-[2px] pl-3 pr-32 rounded-lg' type="email" placeholder='Email Address' />
          <br />
          <br />
          <input className='text-xl h-[41px] xl:w-[344px] lg:w-[333px] md:w-[325px] w-[250px] xl:ml-0 lg:ml-0 md:ml-0 sm:ml-[-1.25rem] ml-[-7.5rem] border-[2px] pl-3 pr-32 rounded-lg' type="text" placeholder='Password' />
          <br />
          <br />
          <input className='text-xl h-[41px] xl:w-[344px] lg:w-[333px] md:w-[325px] w-[250px] xl:ml-0 lg:ml-0 md:ml-0 sm:ml-[-1.25rem] ml-[-7.5rem] border-[2px] pl-3 pr-32 rounded-lg' type="text" placeholder='Confirm Password' />
         
          <button className='mt-[1.25rem] py-1 px-12 xl:ml-[5.75rem] lg:ml-[5.75rem] md:ml-[5.75rem] sm:ml-[2.1rem] ml-[-3.5rem] flex items-center text-3xl bg-[#DBCEBB] rounded-lg text-white text-center pl-11 py-1'>
                 Sign up
          </button>
        </div>

    </AnimationWrapper>

     
        </div>

        {/* Main images boxes */}

        <div className='ml-24 xl:flex hidden'>
          
        <Image
        src={mainImg}
        height={1000}
        width={1000}
        alt='main image'
        />
    </div>
       
      </div>
    </section>
    </>
   
  )
}

export default Signup
