import React, { useEffect, useState } from 'react'
import VideoPlayer from '@/components/VideoPlayer'
import Slide from '@/components/Slide'
import { useRouter } from 'next/router'
import Quiz from '@/components/Quiz'

const Detail = () => {
  const router = useRouter()
  // console.log(router.pathname)
  // console.log(router.asPath)
  const [data, setData] = useState([])
  // let { alias } = router.query
  // const [level, index, type] = (alias == undefined || !alias.includes('-')) ? ['beginner', '0']: alias.split("-")
  // const [level, index, type, resource_name] = alias
  // setData(router.query.alias) 


  return (
    <>
      {router.query.alias != undefined && router.query.alias[2] == 'video' ? (
        <VideoPlayer level={router.query.alias[0]} index={router.query.alias[1]} video_name={router.query.alias[3]}/>
      ) : (null)}
      {router.query.alias != undefined && router.query.alias[2] == 'slide' ? (
        <Slide level={router.query.alias[0]} index={router.query.alias[1]} slide_name={router.query.alias[3]}/>
      ) : (null)}
      {router.query.alias != undefined && router.query.alias[2] == 'quiz' ? (
        <Quiz level={router.query.alias[0]} index={router.query.alias[1]} module={router.query.alias[3]} link={router.asPath}/>
      ) : (null)}
    </>

  )
}

export default Detail