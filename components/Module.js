import React from 'react'
import Image from 'next/image'
import {FaCheck} from 'react-icons/fa'
import {easeIn, easeInOut, motion} from 'framer-motion'
import { useState, useEffect } from 'react'
import {FaLock} from 'react-icons/fa'
import { isLinkVisited, markLinkAsVisited } from '@/components/LinkTracker';
import Link from 'next/link'



const Module = ({item, index, module_link }) => {
  const [passcode, setPasscode] = useState(null)
  const [ask, setAsk] = useState(false)
  const unlock = () => {
    if (passcode == 'britt') {markLinkAsVisited(item.prerequisite); setAsk}
    if (passcode != 'britt') {setPasscode(''); return}
    // markLinkAsVisited(item.prerequisite)
    // router.push('/modules') 
  };
  const islocked = () => {
    if (item.prerequisite == 'none') {return false}
    return !isLinkVisited(item.prerequisite);
  }
  return (
    <>
      <div className='relative bg-yellow-100 flex  flex-col items-center w-[300px] h-[350px] m-4 border-1 rounded-lg shadow-lg transition-all duration-300 hover:shadow-42xl hover:bg-yellow-300'
        // onDoubleClick={()=>{unlock(module.prerequisite)}}
      >
        <div className="relative w-[300px] h-4/5  board-image flex flex-row justify-center items-center">
          {isLinkVisited(module_link) &&
            <FaCheck className="text-green-400 absolute top-[3rem] right-[3rem] opacity-90" size={50}/>
          }
          <Link href={module_link} className='tick-icon'>
            <motion.img className="pt-10" src={"/" + item.profile} alt={item.name} height={200} width={200}
              whileHover={{scale: 1.2,}}   transition={{duration: 1, type: "spring", stiffness: 400, damping: 10 }}
            />
          </Link>
        </div>
        <p className='p-4 text-xl'>{item.name}</p>
        { (islocked() && passcode != 'britt') &&
          <div className='h-[350px] w-[300px]  bg-gray-400 opacity-80 absolute top-0 left-0 flex flex-col justify-center items-center z-10'><FaLock className="text-gray-600" size={50}  onDoubleClick={()=>{setAsk(true)}}/></div>
        }        
      </div>
      {(ask)  && (
        <div className='fixed top-[20%] left-[30%] w-[32rem] mt-[10rem] bg-white text-lg rounded-lg shadow-lg p-8 opacity-95 z-20'>
          <h2 className='text-2xl font-bold mb-4'>Backdoor</h2>
          <label className='text-xl'>Please enter the passcode to unlock this module.</label>
          <input className="bg-green-300 p-2 my-4 w-[24rem]" value={passcode} placeholder="instructor name in small letter" onChange={e => { setPasscode(e.currentTarget.value) }}/>
          <button className='bg-red-500 text-white px-4 py-2 my-2' onClick={()=>{setAsk(false);unlock()}}>Submit</button>
        </div>
      )}      
    </>
  )
}
export default Module