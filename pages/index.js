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
        <span className={'inline-flex justify-center items-center bg-blue-500  text-white opacity-80 w-[5rem] h-[5rem] text-center m-4  p-4 rounded-full hover:bg-yellow-300 hover:text-black hover:shadow-lg hover:cursor-pointer shadow-lg shadow-blue-500/50 hover:scale-110 duration-500'} onClick={() => {setShowIntro(!showIntro); if(showSiteMap){setShowSiteMap(false)}}}>
          History
        </span>
        <span className={'inline-flex justify-center items-center bg-green-500  text-white opacity-80 w-[5rem] h-[5rem] text-center m-4  p-4 rounded-full hover:bg-yellow-300 hover:text-black hover:shadow-lg hover:cursor-pointer shadow-lg shadow-green-500/50 hover:scale-110 duration-500 '} onClick={() => {setShowSiteMap(!showSiteMap);if(showIntro){setShowIntro(false)}}}>
          Team
        </span>
        
      </div>
      {/* <div className="fixed top-[90px] flex flex-col left-0 right-0 bottom-0 flex justify-center items-center z-[-10]"> */}
        {/* <div className="w-full h-screen">
          <iframe loading="lazy" className="w-full h-full" src="https://app.vectary.com/p/1jKTeMq6cXDjSz2yG7HRKg" frameBorder="0" width="auto" height="auto"></iframe>
        </div> */}
        {/* <h1>Monopoly Introduction</h1>
        <p>Monopoly is a popular multi-player board game where players roll dice to move around the board, buy properties, and build houses and hotels. The goal is to collect rent from opponents and drive them into bankruptcy. Players can gain or lose money through cards and tax squares, and they receive a salary when passing "Go." The game has various versions, spin-offs, and media adaptations, with international popularity. It originated from The Landlord's Game by Lizzie Magie in 1903, promoting the idea of rewarding individuals in the economy rather than monopolies. The current rules are based on one set from The Landlord's Game. Published by Parker Brothers in 1935, the game's name stems from the economic concept of a monopoly, dominating a market.</p> */}
      {/* </div>     */}
    </>
  )
}
