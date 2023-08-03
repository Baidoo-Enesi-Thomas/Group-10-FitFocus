import {feedback} from '../constants';
import styles from '../style';
import FeedbackCard from './FeedbackCard';

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient'/>
    <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 text-[52px] mb-6 relative z-[1]'>
      <h1 className='{styles.heading2} font-bold text-white mr-52' >Words from Our Customers</h1>
      <div className='w-full md:mt-0 mt-6 text-right'>
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>Everything you need to embark on your fitness journey is right here. From personalized workouts to expert guidance, our fitness webpage provides you with the tools and resources to achieve your goals.</p>
      </div>
    </div>
    <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card}/>
      ))}

    </div>
  </section>
  )


export default Testimonials