import Module from '@/components/Module'
import useSWR from 'swr'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { isLinkVisited, markLinkAsVisited } from '@/components/LinkTracker';
import {FaLock} from 'react-icons/fa'
import { useRouter } from 'next/router';


const fetcher = (key) => fetch(key).then((res) => res.json())

export default function Modules() {
  const router = useRouter()
  const [passcode, setPasscode] = useState(null)
  const url =  '/moduleData.json'
  const {data, error, isLoading} = useSWR(url, fetcher)
  const unlock = (prerequisite) => {
    if (passcode != 'britt') {setPasscode(''); return}
    markLinkAsVisited(prerequisite)
    router.push('/modules')
  };

  const module_link = (level, module, index) => {
    return ('/module/' + level + '/' +  index + "/" + module.type + "/" + module.video_name) 
  }
  const islocked = (prerequisite) => {
    if (prerequisite == 'none') {return false}
    return !isLinkVisited(prerequisite);
  }

  return (
    <>
      {isLoading ?  (
        <div>Loading</div>
      ) : (
        <div className='relative pt-[90px] max-w-[1000px] mx-auto'>
          <h2 className='p-4 text-3xl'>Beginner module</h2>
          <div className='flex flex-wrap justify-center text-black'>
            {data.beginner.map((module, index) => (
              <div key={index} className='relative'>
                <Link href={module_link('beginner', module, index)} class='tick-icon'
                  // onClick={() => handleClick(module_link('beginner', module, index), module.type)}
                >
                  <Module item={module} index={index}
                    isLinkVisited={isLinkVisited(module_link('beginner', module, index))}
                  />            
                </Link>
                { islocked(module.prerequisite) &&
                  <div className='h-[350px] w-[300px] mt-[1rem] mx-[1rem] bg-gray-400 opacity-80 absolute top-0 left-0 flex flex-col justify-center items-center' onDoubleClick={()=>{unlock(module.prerequisite)}}><FaLock className="text-gray-600" size={50}/></div>
                }
              </div>
            ))}  
          </div>
          <h2 className='p-4 text-3xl'>Tactics module</h2>
          <div className='flex flex-wrap justify-center text-black'>
            {data.tactics.map((module, index) => (
              <div key={index} className='relative'> 
                <Link href={module_link('tactics', module, index)} class='tick-icon'
                  // onClick={() => handleClick(module_link('tactics', module, index), module.type)}
                >
                  <Module item={module} index={index}
                    isLinkVisited={isLinkVisited(module_link('tactics', module, index))}
                  />            
                </Link>
                { islocked(module.prerequisite) &&
                  <div className='h-[350px] w-[300px] mt-[1rem] mx-[1rem] bg-gray-400 opacity-80 absolute top-0 left-0 flex flex-col justify-center items-center' onDoubleClick={()=>{unlock(module.prerequisite)}}><FaLock className="text-gray-600" size={50}/></div>
                }
              </div>
            ))}  
          </div>
          <h2 className='p-4 text-3xl'>Variations of Monopoly</h2>
          <div className='flex flex-wrap justify-center text-black'>
            {data.variations.map((module, index) => (
              <div key={index} className='relative'>
                <Link key={index} href={module_link('variations', module, index)} class='tick-icon'
                  // onClick={() => handleClick(module_link('variations', module, index), module.type)}
                >
                  <Module item={module} index={index}
                    isLinkVisited={isLinkVisited(module_link('variations', module, index))}
                  />            
                </Link>
                { islocked(module.prerequisite) &&
                  <div className='h-[350px] w-[300px] mt-[1rem] mx-[1rem] bg-gray-400 opacity-80 absolute top-0 left-0 flex flex-col justify-center items-center' onDoubleClick={()=>{unlock(module.prerequisite)}}><FaLock className="text-gray-600" size={50}/></div>
                }
              </div>
            ))}  
          </div>
          {(passcode != "britt" && passcode != null)  && (
            <div className='absolute top-0 left-[30%] w-[32rem] mt-[10rem] bg-white text-lg rounded-lg shadow-lg p-8 opacity-90'>
              <h2 className='text-2xl font-bold mb-4'>Backdoor</h2>
              <label className='text-xl'>Please enter the passcode to unlock this module.</label>
              <input className="bg-green-300 p-2 my-4 w-[24rem]" value={passcode} placeholder="instructor name in small letter" onChange={e => { setPasscode(e.currentTarget.value); }}/>
              <button className='bg-red-500 text-white px-4 py-2 my-2' onClick={()=>{setPasscode(null)}}>Cancel</button>
            </div>
          )}
        </div>
      )}
    </>
  )
}
