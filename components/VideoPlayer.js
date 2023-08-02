import React, { useEffect, useRef, useState } from "react";
import YouTube from 'react-youtube';
import useSWR from 'swr'
import Link from "next/link";
import { isLinkVisited, markLinkAsVisited } from '@/components/LinkTracker';

const fetcher = (key) => fetch(key).then((res) => res.json())

const VideoPlayer = ({level, index, video_name, link}) => {
  const [topic, setTopic] = useState(null)

  const playerRef = useRef(null);
  const opts = {
    height: '500',
    width: '100%',
    playerVars: {
      autoplay: 1,
      'cc_load_policy': 1,
      'cc_lang_pref': 'en'
    },    
  };  
  const onReady = (event) => {
    playerRef.current = event.target;
  };

  const onPlay = (event) => {
    playerRef.current.setOption('captions', 'track', {languageCode: 'en'}) 
  }

  const onEnd = () => {
    console.log('topic is end')
    markLinkAsVisited(link)
  }
  const handleSeek = (time) => {
    const player = playerRef.current;
    if (player && typeof player.seekTo === 'function') {
      player.seekTo(time);
    }
  };

  
  const url =  '/moduleData.json'
  const {data, error, isLoading} = useSWR(url, fetcher)
  return (
    <div className="bg-white/80 h-[100vh]">
      {data && (
        <div className='pt-[100px] max-w-[1600px] mx-auto]'>
          <h2 className='p-4 text-3xl'>Topic: {data[level][index].name} [{level.charAt(0).toUpperCase() + level.slice(1)} module]</h2>
          <div className='p-4 flex text-black w-full'>
            <div className="w-full">
              <h2 className="text-xl ml-4">Overview</h2>
              <div style={{ float: "left", width: "25%" }}>
                <div className="w-full flex flex-col justify-start">
                  {/* <h2 className="text-xl ml-4">Overview</h2> */}
                  <p className="p-4 m-4 bg-green-400 rounded-lg">{data[level][index].description}</p>
                  <h2 className="text-xl ml-4 mt-4">Jump to subtopics</h2>
                  <div className="w-full flex flex-wrap justify-center items-center">
                    {data[level][index].jump_point.map((item, key) => (
                      <span key={key} className={ (key == topic ? 'bg-blue-500 text-white'  : 'bg-blue-300 ') + 'w-[8.3rem] text-center m-4  p-4 rounded-lg hover:bg-yellow-300 hover:text-black hover:shadow-lg'} onClick={() => {handleSeek(item.time); setTopic(key)}} 
                      >
                        {item.name}
                      </span> 
                    ))}
                  </div>
                  {/* <h2  className='text-xl ml-4 mt-4'>Next action</h2> */}
                  <div className="w-full flex flex-col justify-center items-center p-4">
                    <Link  href="/modules"><span className={'w-full bg-red-500 text-white text-center  p-4 rounded-lg hover:bg-yellow-300 hover:text-black hover:shadow-lg'}>Return</span></Link>
                  </div>
                </div>
              </div>
              <div className="relative  w-full"  style={{ float: "right", width: "70%" }}>
                <YouTube videoId={video_name} opts={opts} onReady={onReady} onPlay={onPlay} onEnd={onEnd}
                  className="absolute top-0 left-0 w-full aspect-video rounded-lg shadow-4xl pr-4"
                />
              </div>
              <div style={{ clear: "both" }}></div>
            </div>
          </div>
        </div> 
      )}
    </div>
  );
};

export default VideoPlayer;
