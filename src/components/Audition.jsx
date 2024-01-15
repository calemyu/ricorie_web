import TalentCard from './TalentCard'
import React, { useState } from 'react'
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { talents } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { audition } from '../assets' 

const Audition = () => {
  return (
      <motion.div 
      className="flex flex-wrap justify-between"
      variants={textVariant()}>
        <p className={`${styles.sectionHeadText}`}> Audition</p>

        <div className='flex items-center '>
        
          <img src={audition} alt="audition" className='min-w-[60px] h-auto'/>

        </div>
      </motion.div>
      

      

    
    
    
    
  )
}

export default SectionWrapper(Audition, "audition")

