import React from 'react';

const Pictures = ({ img, content }) => (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
        <div className='flex flex-col ml-4'>
            <img src={img} alt='content' className="w-[60%] h-auto relative z-[5]"/>
            <p className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite mt-4'>{content}</p>
        </div>
    </div>
);

export default Pictures;


