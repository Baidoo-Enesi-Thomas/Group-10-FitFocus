import React from 'react'

const AboutUs = ({title, content}) =>(  
    <div id = "AboutUs">
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
        <p className='font-poppins font-normal text-[35px] leading-[24px] text-white'>{title}</p>
        <p className='font-poppins font-normal text-[18px] leading-[32px] text-dimWhite my-10'>{content}</p>
    </div>
    </div>
)


export default AboutUs