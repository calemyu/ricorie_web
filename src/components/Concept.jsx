import React, { useState } from 'react'
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { talents} from "../constants";
import { logo } from "../assets";
import { fadeIn, textVariant } from "../utils/motion";

const Concept = () => {
  return (
    <div className="flex flex-wrap flex-row-reverse justify-between">

      <motion.div 
      className="w-full md:w-3/5"
      variants={ textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>Concept</h2>
        <motion.p
            variants={fadeIn("","",0.1,1)}
            className='text-secondary text-[20px] max-w-3xl text-justify '>
            Ricorie Productions is an agency which attracts all sorts 
            of people to our dormitory. From misfits to troublemakers, 
            our dorm is full of colourful (read: problem) characters. 
            Join us as we experience their extraordinary day to day stories!
          </motion.p>

      </motion.div>
      <motion.div 
      variants={textVariant()} 
      className="w-full md:w-1/4 flex justify-center items-center ">
        <img src={logo} alt="logo" className='relative min-w-[240px] h-auto object-contain'/>
      </motion.div>
    
    </div>
  )
}

export default SectionWrapper(Concept, "concept");