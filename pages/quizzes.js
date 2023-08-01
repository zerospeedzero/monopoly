import Module from '@/components/Module'
import useSWR from 'swr'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { isLinkVisited, markLinkAsVisited } from '@/components/LinkTracker';


const fetcher = (key) => fetch(key).then((res) => res.json())

export default function Quizzes() {
  const url =  '/moduleData.json'
  const {data, error, isLoading} = useSWR(url, fetcher)
  const handleClick = (link,type) => {
    if (type != 'quiz')
      markLinkAsVisited(link);
  };
  return (
    <>
      {isLoading ?  (
        <div>Loading</div>
      ) : (
        <div className='w-screen h-screen flex flex-col justify-center items-center bg-white/80'>
          <h2 className='text-4xl'>Quiz</h2>
          <div className='pt-[90px] max-w-[1000px] mx-auto flex flex-row justify-center items-center'>
            <div className='flex text-black'>
              <Link href={"/module/beginner/2/quiz/beginner"} class='tick-icon'
              >
                <Module item={data.beginner[2]} index={2}
                  isLinkVisited={isLinkVisited("/module/beginner/2/quiz/beginner")}
                />            
              </Link>
            </div>
            <div className='flex text-black'>
                <Link href={"/module/tactics/2/quiz/tactics"} class='tick-icon'
                >
                  <Module item={data.tactics[2]} index={2}
                    isLinkVisited={isLinkVisited("/module/tactics/2/quiz/tactics")}
                  />            
                </Link>
            </div>
            <div className='flex text-black'>
                <Link  href={"/module/variations/2/quiz/variations"} class='tick-icon'
                >
                  <Module item={data.variations[2]} index={2}
                    isLinkVisited={isLinkVisited("/module/variations/2/quiz/variations")}
                  />            
                </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
