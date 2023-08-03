import styles from "../style"
import {logo} from '../assets'
import {footer} from '../constants';
import { socialMedia } from "../constants"
import AboutUs from "./AboutUs";

const Footer = () =>(
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img src={logo} alt="FitFocus" className="w-[124px] h-[32px] object-contain"/>
        </div>
      </div>
      <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
      {footer.map((card) => (
        <AboutUs key={card.id} {...card}/>
      ))}

      </div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-[18px] leading-[27px] text-white">
          2023 FitFocus. All Rights Reserved
        </p>
        <div className="flex flex-row md:mt-o mt-6">
          {socialMedia.map((social,index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`}/>
          ))}
        </div>
      </div>
    </section>
  )


export default Footer