import React, { useEffect, useRef, useState } from "react";
import useSWR from 'swr'

const fetcher = (key) => fetch(key).then((res) => res.json())

const Slide = ({level, index, slide_name}) => {
  const [topic, setTopic] = useState(null)
  // const url = process.env.NEXT_PUBLIC_MODULE_DATA_URL
  const url =  '/moduleData.json'
  const {data, error, isLoading} = useSWR(url, fetcher)
  console.log(slide_name)
  return (
    <>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <>
          <div className='pt-[100px] max-w-[1600px] mx-auto'>
            <h2 className='p-4 text-3xl'>Topic: {data[level][index].name} [{level.charAt(0).toUpperCase() + level.slice(1)} module]</h2>
            <div className='p-4 flex text-black w-full'>
              <div className="w-full flex flex-col justify-center items-center">
                <iframe src={"https://slides.com/wowwewow/" + slide_name + "/embed"}
                  className="w-full max-w-[1000px] aspect-video border-2 shadow-lg rounded-lg"
                  width="100%"
                  height="auto" 
                  title="Copy of Palette" 
                  scrolling="no" 
                  frameborder="0" 
                  webkitallowfullscreen mozallowfullscreen allowfullscreen
                >
                </iframe>
              </div>
            </div>
          </div>
        </>
      )}

    </>
  );
};

export default Slide;
