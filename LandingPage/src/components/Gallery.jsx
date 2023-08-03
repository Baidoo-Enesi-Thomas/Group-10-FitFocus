import styles from "../style"
import Pictures from "./Pictures"
import {gallery} from "../constants"

const Gallery = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
    </div>
    
    <div  className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
      {gallery.map((card) => (
        <Pictures key={card.id} {...card}/>
      ))}  
    </div>
    


  </section>
)


export default Gallery
