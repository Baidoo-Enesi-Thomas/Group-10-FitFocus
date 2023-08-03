import React from 'react';
import styles from '../style';
import {robot} from '../assets';
import GetStarted from './GetStarted';

const Hero = () =>  (
  <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
        
        <p className={`${styles.paragraph} ml-2 `} style={{ fontSize: '25px'}}>
          Your 
          <span className='text-white'> Fitness</span> .Your
          <span className='text-white'> Health</span> {" "}
          
        </p>
       
      </div>

      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
        Your <br/> <div className='sm:block hidden'></div> {" "}
        <span className='text-gradient'>Health Data <br/></span> {" "} 
        
        </h1>
        <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted/>
        </div>
      </div>

      <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>in your control.</h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Our team helps you get a Closer look at your physical and mental health</p>
    </div>
    <div className={'flex-1 flex ${style.flexcenter} md:my-0 m-10 relative'}>
    <div className='flex justify-end items-center py-[6px] px-4 rounded-[10px] mb-5 ml-20'>
      <img src={robot} alt='billing' className='w-[40%] h-auto relative z-[5] mr-[250px]'/>

      <div className='absolute z-[0] w-[40%] h-[35%] top-0 blue__gradient'/>
      <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient'/>
      <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 purple__gradient'/>
    </div>
    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted/> 

    </div>
  </section>
)

export default Hero