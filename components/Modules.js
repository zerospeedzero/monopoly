import Module from '@/components/Module'
import useSWR from 'swr'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { isLinkVisited, markLinkAsVisited } from '@/components/LinkTracker';
import {FaLock} from 'react-icons/fa'


const fetcher = (key) => fetch(key).then((res) => res.json())

export default function Modules() {
  const url =  '/moduleData.json'
  const {data, error, isLoading} = useSWR(url, fetcher)
  const handleClick = (link,type) => {
  };

  const module_link = (level, module, index) => {
    return ('/module/' + level + '/' +  index + "/" + module.type + "/" + module.video_name) 
  }

  return (
    <>
      {isLoading ?  (
        <div>Loading</div>
      ) : (
        <div className='pt-[90px] max-w-[1000px] mx-auto'>
          <h2 className='p-4 text-3xl'>Beginner module</h2>
          <div className='flex flex-wrap justify-center text-black'>
            {data.beginner.map((module, index) => (
              <div className='relative'>
                <Link key={index} href={module_link('beginner', module, index)} class='tick-icon'
                  onClick={() => handleClick(module_link('beginner', module, index), module.type)}
                >
                  <Module item={module} index={index}
                    isLinkVisited={isLinkVisited(module_link('beginner', module, index))}
                  />            
                </Link>
                {/* <div className='h-[350px] w-[300px] mt-[1rem] mx-[1rem] bg-gray-400 opacity-80 absolute top-0 left-0 flex flex-col justify-center items-center'><FaLock className="text-gray-600" size={50}/></div> */}
              </div>
            ))}  
          </div>
          <h2 className='p-4 text-3xl'>Tactics module</h2>
          <div className='flex flex-wrap justify-center text-black'>
            {data.tactics.map((module, index) => (
              <Link key={index} href={module_link('tactics', module, index)} class='tick-icon'
                onClick={() => handleClick(module_link('tactics', module, index), module.type)}
              >
                <Module item={module} index={index}
                  isLinkVisited={isLinkVisited(module_link('tactics', module, index))}
                />            
              </Link>
            ))}  
          </div>
          <h2 className='p-4 text-3xl'>Variations of Monopoly</h2>
          <div className='flex flex-wrap justify-center text-black'>
            {data.variations.map((module, index) => (
              <Link key={index} href={module_link('variations', module, index)} class='tick-icon'
                onClick={() => handleClick(module_link('variations', module, index), module.type)}
              >
                <Module item={module} index={index}
                  isLinkVisited={isLinkVisited(module_link('variations', module, index))}
                />            
              </Link>
            ))}  
          </div>
        </div>
      )}
    </>
  )
}
