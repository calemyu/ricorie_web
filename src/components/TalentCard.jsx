import React from 'react';
import {motion} from "framer-motion";
import { styles } from '../styles';
import { fadeIn, textVariant } from "../utils/motion";


const TalentCard = ({title, icon, index, active, handleClick, size}) => (
    <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='relative flex items-center justify-center rounded-[20px] min-w-[200px] h-[700px]
        cursor-pointer'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-cotton flex flex-1 rounded-[20px] min-w-[320px] h-[700px]'
      >

        

          <img
          src={icon}
          alt='icon'
          className={`absolute w-full h-full object-none object-[55%_70px] rounded-[24px]`}
        />
      </div>

    </motion.div>

);

export default TalentCard