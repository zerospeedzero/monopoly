import React, { useEffect, useState } from 'react'
import VideoPlayer from '@/components/VideoPlayer'
import Slide from '@/components/Slide'
import { useRouter } from 'next/router'
import Quiz from '@/components/Quiz'

const Detail = () => {
  const router = useRouter()
  const [data, setData] = useState([])
  return (
    <>
      {router.query.alias != undefined && router.query.alias[2] == 'video' ? (
        <VideoPlayer level={router.query.alias[0]} index={router.query.alias[1]} video_name={router.query.alias[3]} link={router.asPath}/>
      ) : (null)}
      {router.query.alias != undefined && router.query.alias[2] == 'slide' ? (
        <Slide level={router.query.alias[0]} index={router.query.alias[1]} slide_name={router.query.alias[3]} link={router.asPath}/>
      ) : (null)}
      {router.query.alias != undefined && router.query.alias[2] == 'quiz' ? (
        <Quiz level={router.query.alias[0]} index={router.query.alias[1]} module={router.query.alias[3]} link={router.asPath}/>
      ) : (null)}
    </>

  )
}

export default Detail