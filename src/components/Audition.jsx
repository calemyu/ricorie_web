import TalentCard from './TalentCard'
import React, { useState } from 'react'
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { talents } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Audition = () => {
  return (
    <motion.div
      className="md:w-3/5"
      variants={textVariant()}
    >
      <h2 className={`${styles.sectionHeadText}`}>Audition</h2>

    
    
    
    </motion.div>
  )
}

export default SectionWrapper(Audition, "audition")

