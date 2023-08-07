import Introduction from "@/components/Introduction";
import SiteMap from '@/components/SiteMap';
import { useState, useEffect } from "react";

export default function Home() {
  const [showIntro, setShowIntro ] = useState(false);
  const [showSiteMap, setShowSiteMap ] = useState(false);

  return (
    <>
      {showIntro &&<Introduction/>}
      {showSiteMap &&<SiteMap/>}      
      <div className="fixed bottom-[2rem] left-{0rem] w-full flex flex-row justify-between">
        <span className={'inline-flex justify-center items-center bg-blue-500  text-white opacity-80 w-[5rem] h-[5rem] text-center m-4  p-4 rounded-full hover:bg-yellow-300 hover:text-black hover:shadow-lg hover:cursor-pointer shadow-lg shadow-blue-500/50 hover:scale-110 duration-500'} onMouseEnter={() => {setShowIntro(!showIntro)}}  onMouseLeave={() => {setShowIntro(!showIntro)}} >
          History
        </span>
        <span className={'inline-flex justify-center items-center bg-green-500  text-white opacity-80 w-[5rem] h-[5rem] text-center m-4  p-4 rounded-full hover:bg-yellow-300 hover:text-black hover:shadow-lg hover:cursor-pointer shadow-lg shadow-green-500/50 hover:scale-110 duration-500 '} onMouseEnter={() => {setShowSiteMap(!showSiteMap)}}  onMouseLeave={() => {setShowSiteMap(!showSiteMap)}}>
          Team
        </span>
      </div>
    </>
  )
}
