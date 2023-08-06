import React, { useEffect, useRef, useState } from "react";
import useSWR from 'swr'
import Link from "next/link";
import { isLinkVisited, markLinkAsVisited } from '@/components/LinkTracker';

const fetcher = (key) => fetch(key).then((res) => res.json())

const Slide = ({level, index, slide_name, link}) => {
  const [topic, setTopic] = useState(null)
  const [account, setAccount] = useState(null)
  const url =  '/moduleData.json'
  const {data, error, isLoading} = useSWR(url, fetcher)
  console.log(slide_name)
  console.log(level)
  useEffect(()=> {
    if (level == 'tactics') {setAccount("wowwewow")}
    if (level == 'variations') {setAccount("bigmoist")}
  }, [])
  return (
    <>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <>
          <div className='pt-[100px] max-w-[1600px] mx-auto'>
            <h2 className='p-4 text-3xl'>Topic: {data[level][index].name} [{level.charAt(0).toUpperCase() + level.slice(1)} module]</h2>
            <div className='p-4 flex text-black w-full'>
              <div className="relative w-full flex flex-col justify-center items-center">
                <Link href="/modules" onClick={()=>markLinkAsVisited(link)}>     
                  <span className={'absolute top-0 right-1 w-[5rem] bg-red-500 text-white text-center  p-2 rounded-lg hover:bg-yellow-300 hover:text-black hover:shadow-lg'}>Return</span>
                </Link>
                <iframe src={"https://slides.com/" + account + "/" + slide_name + "/embed"}
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
