'use client'

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { mainImg } from '@/public/img';
import { AnimationWrapper } from '../components';
import { FaFacebook, FaGoogle } from "react-icons/fa";



const Signin = () => {


  return (
    <section id='signup'>
      <div className='flex flex-col md:flex-row items-center justify-center px-16 py-10 md:px-16 md:py-10'>

        {/* Sign in and Sign up box */}

        <div className='font-medula bg-white xl:w-[750px] md:w-[600px] sm:w-[500px] w-[300px] px-36 py-36 rounded-2xl'>
          <div className='mt-[-7rem] text-center'>
            <h1 className='font-regular text-9xl xl:ml-0 lg:ml-0 md:ml-0 sm:ml-[1rem] ml-[-4rem] text-[#DBCEBB]'>
            AISA
            </h1>
          </div>
          

          <div className='py-7 flex items-center text-center justify-center'>
           
            <h5 className='mr-28 text-[#242D3C] border-b-[3px] border-[#DBCEBB] font-regular text-3xl ease-in-out duration-500 cursor-pointer'>
              Sign In
            </h5>
          
          
          <Link href='/signup'>
            <h5 className='text-[#989898] font-regular text-3xl hover:text-[#242D3C] ease-in-out duration-500 cursor-pointer'>
              Sign Up
            </h5>
            </Link>
          </div>


        <AnimationWrapper>
          <div data-aos='fade-up'>

       
          <input className='text-xl h-[41px] xl:w-[344px] lg:w-[333px] md:w-[325px] w-[250px] xl:ml-0 lg:ml-0 md:ml-0 sm:ml-[-1.25rem] ml-[-7.5rem] border-[2px] pl-3 pr-32  rounded-lg' type="text" placeholder='Username or Email' />
          <br />
          <br />
          <input className='text-xl h-[41px] xl:w-[344px] lg:w-[333px] md:w-[325px] w-[250px] xl:ml-0 lg:ml-0 md:ml-0 sm:ml-[-1.25rem] ml-[-7.5rem] border-[2px] pl-3 pr-32 rounded-lg' type="text" placeholder='Password' />

          <br />

          <h5 className='py-7 text-[#242D3C] font-regular text-2xl text-center'>
            or
          </h5>
          
          <button className='h-[41px] xl:w-[344px] lg:w-[333px] md:w-[325px] w-[250px] xl:ml-0 lg:ml-0 md:ml-0 sm:ml-[-1.25rem] ml-[-7.5rem] flex items-center text-3xl bg-[#DBCEBB] rounded-lg text-white text-center pl-11 py-1'>
            <FaGoogle style={{color: '#fff', fontSize: '27px'}} className='xl:mr-[2.1rem] lg:mr-[2.1rem] md:mr-[2.1rem] mr-[1rem] xl:ml-0 lg:ml-0 md:ml-0 ml-[-1rem]'/> Sign in with Google 
          </button>

          <br />
         
          <button className='h-[41px] xl:w-[344px] lg:w-[333px] md:w-[325px] w-[250px] xl:ml-0 lg:ml-0 md:ml-0 sm:ml-[-1.25rem] ml-[-7.5rem] flex items-center text-3xl bg-[#DBCEBB] rounded-lg text-white text-center pl-11 py-1'>
            <FaFacebook style={{color: '#fff', fontSize: '27px'}} className='xl:mr-[2.1rem] lg:mr-[2.1rem] md:mr-[2.1rem] mr-[1rem] xl:ml-0 lg:ml-0 md:ml-0 ml-[-1rem]'/> Sign in with Facebook 
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
  )
}

export default Signin
