import React from 'react'
import Link from 'next/link'
import { isLinkVisited, markLinkAsVisited } from '@/components/LinkTracker';
import { useEffect, useState } from 'react';

const practice = () => {
  const [isload, setIsload] = useState(false)
  const maximizeIframe =() => {
    const iframe = document.getElementById('game');
    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) { /* Firefox */
        iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) { /* IE/Edge */
        iframe.msRequestFullscreen();
    }
  }
  const locked = (prerequisite) => {
    if (prerequisite == 'none') {return false}
    // if (!isload) {return true}
    return !isLinkVisited(prerequisite);
  } 
  useEffect(()=>{
    setIsload(!locked('/module/beginner/1/quiz/beginner'))
    // locked('/module/beginner/1/quiz/beginner')
  },[])
  
  return (
    <div className="w-full flex flex-col justify-center items-center mt-[100px]">
      { !isload ? 
        <div className='bg-white mt-[200px] p-4 flex flex-col justify-center items-center rounded-lg shadow-md opacity-90'>
          <h2 className='text-center text-3xl'>Practice is locked</h2>
          <p className='p-4'>You need to pass the beginner quiz in order to play the Monopoly Practice.</p>
          <Link href="/modules"><button className='px-4 py-2 mt-2 bg-blue-500 text-white rounded-lg '>Return</button></Link>
        </div> 
      : (
      <div className='w-[1000px] relative'>
        <Link className="absolute top-[80%] left-[calc(46%)]" href="/" onClick={console.log('start game')}>     
          <span className={'w-[18rem] bg-blue-500 text-white text-center  p-2 rounded-md hover:bg-yellow-300 hover:text-black hover:shadow-lg'}>Return</span>
        </Link>
        {/* <span className={'absolute top-[80%] left-[calc(66%)]  w-[18rem] bg-blue-500 text-white text-center  p-2 rounded-lg hover:bg-yellow-300 hover:text-black hover:shadow-lg'}
          onClick={()=>{maximizeIframe()}}
        >
            Full Screen
        </span> */}
          <iframe id="game" src={"/practice/index.html"}
            className="w-[full] aspect-square border-[10px] border-blue-200 shadow-lg rounded-lg"
            width="100%"
            height="auto" 
            title="Copy of Palette" 
            scrolling="no" 
            frameBorder="0" 
            >
          </iframe>
      </div>
      )}
    </div>
  )
}

export default practice