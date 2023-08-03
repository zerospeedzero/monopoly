import React from 'react'
import {easeIn, easeInOut, motion} from 'framer-motion'
const Banner = () => {
  return (
    <div className='flex w-screen h-[100px]'>
      <motion.div className='bg-gradient-to-b from-blue-500 w-[34%]'
        initial={{ x: "100%", y: "calc(100vh - 50%)", scale: 3 }} animate={{ x: "0%", y: "0%", scale: 1, }} transition={{duration:2, delay: 1, ease: easeInOut}}
      >
      </motion.div>
      <motion.div className='bg-gradient-to-b from-red-500 w-[23%]'
        initial={{ x: "50%", y: "calc(100vh - 50%)", scale: 2 }} animate={{ x: "0%", y: "0%", scale: 1 }} transition={{duration:2, delay: 1.5}}
      >
      </motion.div>
      <motion.div className='bg-gradient-to-b from-yellow-300 w-[5%]'
        initial={{ x: "0%", y: "calc(100vh - 50%)", scale: 1 }} animate={{ x: "0%", y: "0%", scale: 1 }} transition={{duration:2, delay: 2}}      
      >
      </motion.div>
      <motion.div className='bg-gradient-to-b from-green-500 w-[38%]'
        initial={{ x: "-100%", y: "calc(100vh - 50%)", scale: 5 }} animate={{ x: "0%", y: "0%", scale: 1 }} transition={{duration:2, delay: 2.5}}      
      >
      </motion.div>
    </div>
  )
}

export default Banner