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
  const handleClick = (link,type) => {
    if (type != 'quiz')
      markLinkAsVisited(link);
  };
  const islocked = (prerequisite) => {
    if (prerequisite == 'none') {return false}
    return !isLinkVisited(prerequisite);
  }
  return (
    <>
      {isLoading ?  (
        <div>Loading</div>
      ) : (
        <div className='w-screen h-screen flex flex-col justify-center items-center bg-white/80'>
          <h2 className='text-4xl'>Quiz</h2>
          <div className='pt-[90px] max-w-[1000px] mx-auto flex flex-row justify-center items-center'>
            <div className='relative flex text-black'>
              <Link href={"/module/beginner/1/quiz/beginner"} class='tick-icon'
              >
                <Module item={data.beginner[1]} index={1}
                  isLinkVisited={isLinkVisited("/module/beginner/1/quiz/beginner")}
                />            
              </Link>
              { islocked(data.beginner[1].prerequisite) &&
                  <div className='h-[350px] w-[300px] mt-[1rem] mx-[1rem] bg-gray-400 opacity-80 absolute top-0 left-0 flex flex-col justify-center items-center'><FaLock className="text-gray-600" size={50}/></div>
              }
            </div>
            <div className='relative flex text-black'>
                <Link href={"/module/tactics/2/quiz/tactics"} class='tick-icon'
                >
                  <Module item={data.tactics[2]} index={2}
                    isLinkVisited={isLinkVisited("/module/tactics/2/quiz/tactics")}
                  />            
                </Link>
                { islocked(data.tactics[2].prerequisite) &&
                  <div className='h-[350px] w-[300px] mt-[1rem] mx-[1rem] bg-gray-400 opacity-80 absolute top-0 left-0 flex flex-col justify-center items-center'><FaLock className="text-gray-600" size={50}/></div>
                }                
            </div>
            <div className='relative flex text-black'>
                <Link  href={"/module/variations/3/quiz/variations"} class='tick-icon'
                >
                  <Module item={data.variations[1]} index={1}
                    isLinkVisited={isLinkVisited("/module/variations/3/quiz/variations")}
                  />            
                </Link>
                { islocked(data.variations[1].prerequisite) &&
                  <div className='h-[350px] w-[300px] mt-[1rem] mx-[1rem] bg-gray-400 opacity-80 absolute top-0 left-0 flex flex-col justify-center items-center'><FaLock className="text-gray-600" size={50}/></div>
                }                     
            </div>
          </div>
        </div>
      )}
    </>
  )
}
