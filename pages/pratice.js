import React from 'react'
import Link from 'next/link'
const testing = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-[100px]">
      <div className='relative w-[1000px]'>
        <Link className="absolute top-[60%] left-[calc(46%)]" href="/" onClick={console.log('start game')}>     
          <span className={'w-[8rem] bg-blue-500 text-white text-center  p-2 rounded-lg hover:bg-yellow-300 hover:text-black hover:shadow-lg'}>Return</span>
        </Link>
        <iframe src={"/practice/index.html"}
          className="w-[full] aspect-square border-2 shadow-lg rounded-lg"
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