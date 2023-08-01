import React from 'react'
const testing = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center pt-[100px]">
      <iframe src={"/practice/index.html"}
        className="w-[full] max-w-[1000px] aspect-square border-2 shadow-lg rounded-lg"
        width="100%"
        height="auto" 
        title="Copy of Palette" 
        scrolling="no" 
        frameborder="0" 
        webkitallowfullscreen mozallowfullscreen allowfullscreen
      >
    </iframe>
    </div>

  )
}

export default testing