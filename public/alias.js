import React from 'react'
import VideoPlayer from '@/components/VideoPlayer'
import { useRouter } from 'next/router'


const Detail = () => {
  const router = useRouter()
  let { alias } = router.query
  // const [level, index, type] = (alias == undefined || !alias.includes('-')) ? ['beginner', '0']: alias.split("-")
  const [level, index, type, resource_name] = alias

  return (
    <>
      {type == 'video' ? (
        <VideoPlayer level={level} index={index} video_name={resource_name}/>
      ) : (<></>)}
    </>

  )
}

export default Detail