// import moduleData from '@/components/moduleData.json'
import Module from '@/components/Module'
import useSWR from 'swr'
import { useState, useEffect } from 'react'
import Link from 'next/link'
// const visited = isLinkVisited(link);
import { isLinkVisited, markLinkAsVisited } from '@/components/LinkTracker';


const fetcher = (key) => fetch(key).then((res) => res.json())

export default function Modules() {
  // const url =  process.env.NEXT_PUBLIC_MODULE_DATA_URL
  const url =  '/moduleData.json'
  const {data, error, isLoading} = useSWR(url, fetcher)
  // const visited = isLinkVisited(link);
  // console.log(isLoading)
  // console.log(data)
  // console.log(error)
  // useEffect(()=> {
  //   const statusLinks = document.querySelectorAll('a.tick-icon');
  //   statusLinks.forEach(link => {
  //     const computedStyles = window.getComputedStyle(link);
  //     if (computedStyles && computedStyles.color === 'rgb(0, 0, 255)') {
  //       console.log(`${link.textContent} has been visited.`);
  //     }
  //   });
  // },[])
  const handleClick = (link,type) => {
    // if (type != 'quiz')
    //   markLinkAsVisited(link);
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
              <Link key={index} href={module_link('beginner', module, index)} class='tick-icon'
                onClick={() => handleClick(module_link('beginner', module, index), module.type)}
              >
                <Module item={module} index={index}
                  isLinkVisited={isLinkVisited(module_link('beginner', module, index))}
                />            
              </Link>
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
