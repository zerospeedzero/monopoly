import React from 'react'
import Image from 'next/image'
import {FaCheck} from 'react-icons/fa'
import {easeIn, easeInOut, motion} from 'framer-motion'

const Module = ({item, index, isLinkVisited}) => {
  return (
    <div className='bg-yellow-200 flex flex-col items-center w-[300px] h-[350px] m-4 border-1 rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-green-400'>
       <div className="relative w-[300px] h-4/5  board-image flex flex-row justify-center items-center">
        {isLinkVisited &&
          <FaCheck className="text-green-400 absolute top-[0.5rem] right-[0.5rem] opacity-90" size={70}/>
        }
        <motion.img src={"/" + item.profile} alt={item.name} height={250} width={250}
          whileHover={{scale: 1.2,}}   transition={{duration: 1, type: "spring", stiffness: 400, damping: 10 }}
        />
       </div>
       <p className='p-4 text-xl'>{item.name}</p>
    </div>
  )
}
export default Module