import React from 'react'
import Link from 'next/link'
const testing = () => {

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
  
  return (
    <div className="w-full flex flex-col justify-center items-center mt-[100px]">
      <div className='relative w-[1000px]'>
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
    </div>

  )
}

export default testing