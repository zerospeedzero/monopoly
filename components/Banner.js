import React from 'react'
import {easeIn, easeInOut, motion} from 'framer-motion'
const Banner = () => {
  return (
    <div className='flex w-screen h-[100px]'>
      <motion.div className='bg-gradient-to-b from-blue-500 w-[34%]'
        initial={{ x: "200%" }} animate={{ x: "0%"}} transition={{duration:2, delay: 1, ease: easeInOut}}
      >
      </motion.div>
      <motion.div className='bg-gradient-to-b from-red-500 w-[23%]'
        initial={{ x: "70%" }} animate={{ x: "0%" }} transition={{duration:2, delay: 1.5}}
      >
      </motion.div>
      <motion.div className='bg-gradient-to-b from-yellow-300 w-[5%]'
        initial={{ x: "-300%"}} animate={{ x: "0%"}} transition={{duration:2, delay: 2}}      
      >
      </motion.div>
      <motion.div className='bg-gradient-to-b from-green-500 w-[38%]'
        initial={{ x: "-170%"}} animate={{ x: "0%" }} transition={{duration:2, delay: 2.5}}      
      >
      </motion.div>
    </div>
  )
}

export default Banner