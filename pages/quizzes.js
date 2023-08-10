import Module from '@/components/Module'
import useSWR from 'swr'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { isLinkVisited, markLinkAsVisited } from '@/components/LinkTracker';
import {FaLock} from 'react-icons/fa'


const fetcher = (key) => fetch(key).then((res) => res.json())

export default function Quizzes() {
  const url =  '/moduleData.json'
  const {data, error, isLoading} = useSWR(url, fetcher)
  const module_link = (level, module, index) => {
    return ('/module/' + level + '/' +  index + "/" + module.type + "/" + module.video_name) 
  }
  return (
    <>
      {isLoading ?  (
        <div>Loading</div>
      ) : (
        <div className='w-screen h-screen flex flex-col justify-center items-center bg-white/80'>
          <h2 className='text-4xl'>Quiz</h2>
          <div className='pt-[90px] max-w-[1000px] mx-auto flex flex-row justify-center items-center'>
            <div className='flex text-black'>
                <Module item={data.beginner[1]} index={1}
                  module_link={module_link('beginner', module, 1)}
                />            
            </div>
            <div className='flex text-black'>
                  <Module item={data.tactics[2]} index={2}
                    module_link={module_link('tactics', module, 2)} 
                  />            
            </div>
            <div className='flex text-black'>
                  <Module item={data.variations[1]} index={1}
                    module_link={module_link('variations', module, 1)}
                  />            
            </div>
          </div>
        </div>
      )}
    </>
  )
}
