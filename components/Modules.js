import Module from '@/components/Module'
import useSWR from 'swr'
import { useRouter } from 'next/router';


const fetcher = (key) => fetch(key).then((res) => res.json())

export default function Modules() {
  const router = useRouter()
  const url =  '/moduleData.json'
  const {data, error, isLoading} = useSWR(url, fetcher)
  const module_link = (level, module, index) => {
    return ('/module/' + level + '/' +  index + "/" + module.type + "/" + module.video_name) 
  }
  return (
    <>
      {isLoading ?  (
        <div>Loading</div>
      ) : (
        <div className='pt-[90px] max-w-[1000px] mx-auto'>
          <h2 className='p-4 text-3xl'>Beginner module</h2>
          <div className='flex flex-wrap justify-center text-black'>
            {data.beginner.map((module, index) => (
              <div key={index} className=''>
                  <Module item={module} index={index} module_link={module_link('beginner', module, index)}/>
              </div>
            ))}  
          </div>
          <h2 className='p-4 text-3xl'>Tactics module</h2>
          <div className='flex flex-wrap justify-center text-black'>
            {data.tactics.map((module, index) => (
              <div key={index} className='relative'> 
                  <Module item={module} index={index} module_link={module_link('tactics', module, index)}/>
              </div>
            ))}  
          </div>
          <h2 className='p-4 text-3xl'>Variations of Monopoly</h2>
          <div className='flex flex-wrap justify-center text-black'>
            {data.variations.map((module, index) => (
              <div key={index} className='relative'>
                  <Module item={module} index={index} module_link={module_link('variations', module, index)}/>
              </div>
            ))}  
          </div>
        </div>
      )}
    </>
  )
}
