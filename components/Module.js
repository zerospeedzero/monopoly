import React from 'react'
import Image from 'next/image'
import {FaCheck} from 'react-icons/fa'
import {easeIn, easeInOut, motion} from 'framer-motion'

const Module = ({item, index, isLinkVisited}) => {
  return (
    <div className='bg-yellow-100 flex  flex-col items-center w-[300px] h-[350px] m-4 border-1 rounded-lg shadow-lg transition-all duration-300 hover:shadow-42xl hover:bg-yellow-300'>
       <div className="relative w-[300px] h-4/5  board-image flex flex-row justify-center items-center">
        {isLinkVisited &&
          <FaCheck className="text-green-400 absolute top-[3rem] right-[3rem] opacity-90" size={50}/>
        }
        <motion.img className="pt-10" src={"/" + item.profile} alt={item.name} height={200} width={200}
          whileHover={{scale: 1.2,}}   transition={{duration: 1, type: "spring", stiffness: 400, damping: 10 }}
        />
       </div>
       <p className='p-4 text-xl'>{item.name}</p>
    </div>
  )
}
export default Module