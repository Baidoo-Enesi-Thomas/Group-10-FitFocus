import styles from './style'

import {NavBar, Hero, Stats ,Fitness, Gallery, Testimonials, CTA ,Footer } from './components';


const App = () =>(
  <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <NavBar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Fitness />
        <Testimonials />
        <Gallery />
        <CTA /> 
        <Footer /> 
        

      </div>
    </div>
  </div>
);

export default App