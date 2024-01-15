import { motion } from 'framer-motion';
import { styles } from '../styles';


const Hero = () => {
  return (
    <section className='relative w-full h-[1080px] flex-col flex'>
        <div className='absolute xs:bottom-10 bottom-10 w-full flex justify-center items-center'>
          <a href="#about">
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary 
            flex justify-center items-center p-2'>
              <motion.dev 
                animate={{
                  y: [-16, 16 , -16]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />

              

            
            </div>
          </a>
      </div>
    </section>
    
  )
}

export default Hero