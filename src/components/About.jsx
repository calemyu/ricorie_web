import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { logo } from "../assets";

const About = () => {
  return (
    <div className="flex flex-wrap justify-between">

      <motion.div 
      className="w-full md:w-3/5"
      variants={textVariant()}>
        <h2 className={`${styles.sectionSubText}`}>Ricorie Productions</h2>
        <p className={`${styles.sectionHeadText}`}> About us</p>
        <motion.p
          variants={fadeIn("","",0.1,1)}
          className='text-secondary text-[20px] max-w-3xl text-justify'>
          Ricorie Productions(tm) is a VTuber agency established in early 2024. Our agency strives to deliver the entertainment with talents that are each unique and come from all sorts of walks of life.
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

export default SectionWrapper(About, "about");