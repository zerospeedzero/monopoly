import React from 'react'
import Image from 'next/image'
import {FaCheck} from 'react-icons/fa'

const Module = ({item, index, isLinkVisited}) => {
  // console.log(item)
  return (
    <div className='bg-yellow-200 flex flex-col items-center w-[300px] h-[350px] m-4 border-1 rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-green-400'>
       <div className="relative h-4/5 overflow-hidden">
        {isLinkVisited &&
          <FaCheck className="text-green-400 absolute top-[40%] left-[30%] opacity-80" size={120}/>
        }
        <Image src={"/" + item.profile} alt={item.name} height={340} width={340}/>
       </div>
       <p className='p-4 text-xl'>{item.name}</p>
    </div>
  )
}
export default Module