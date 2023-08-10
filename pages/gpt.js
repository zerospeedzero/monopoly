import Chat from "@/components/Chat";
import { isLinkVisited, markLinkAsVisited } from '@/components/LinkTracker';
import { useEffect, useState } from 'react';
import Link from "next/link";
export const runtime = "experimental-edge";

export default function Page() {
  const [isload, setIsload] = useState(false)
  useEffect(()=>{
    setIsload(true)
  },[])
  const islocked = (prerequisite) => {
    if (prerequisite == 'none') {return false}
    if (!isload) {return true}
    return !isLinkVisited(prerequisite);
  } 
    
  return (
    <div className="h-screen w-screen pt-[120px] flex flex-col items-center  bg-white/70 ">
      { islocked('/module/tactics/2/quiz/tactics') ? 
        <div className='bg-white mt-[200px] max-w-[40rem] p-4 flex flex-col justify-center items-center rounded-lg shadow-md opacity-90'>
          <h2 className='text-center text-3xl'>GPT is locked</h2>
          <p className='p-4'>You need to pass the beginner and tactics quizzes in order to use the GPT.</p>
          <Link href="/modules"><button className='px-4 py-2 mt-2 bg-blue-500 text-white rounded-lg '>Return</button></Link>
        </div> 
      : (
        <div className="max-w-[60rem] mx-auto">
          <h2 className="text-center text-3xl p-8">Monopoly Academy embedding for GPT</h2>
          <p className="text-center pb-4">Ask me anything about this website and i will answer you with our trained data.</p>
          <Chat />
        </div>
      )}
    </div>
  );
}
