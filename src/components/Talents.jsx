import TalentCard from './TalentCard'
import React, { useState } from 'react'
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { talents } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Talents = () => {
  const [active,setActive] = useState('Acti Matatabi');
  return (

      <motion.div
      className="md:w-3/5"
      variants={textVariant()}
      >
        <h2 className={`${styles.sectionHeadText}`}>Talents</h2>

        <div className='mt-[20px] flex lg:flex-row flex-col min-h-[320px] gap-10'>
          {talents.map((talent, index)=>(
            <TalentCard 
              key={talent.title}
              {...talent}
              index={index}
              active={active}
              handleClick={setActive} 
              />
          ))}
        </div>
      </motion.div>
  )
}

export default SectionWrapper(Talents, "talents")