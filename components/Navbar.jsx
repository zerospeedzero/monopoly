import Link from 'next/link';
import React, {useState, useEffect} from 'react';
// import {AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
// import * as gtag from "../lib/gtag"
import Vectary from "@/components/Vectary"
import Image from 'next/image'
import Banner from '@/components/Banner'
import {motion} from 'framer-motion'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');
  const [url, setUrl] = useState('');
  const changePath = (url) => {
    // gtag.pageview(url);
    console.log(url);
  }
  const handleNav = () => {
    setNav(!nav)
  }
  useEffect(() => {
    const changeColor = () => {
      if(window.scrollY >= 90) {
        setColor('#ffffff')
        setTextColor('#000000')
      } else {
        setColor('transparent')
        setTextColor('#ffffff')
      }
    }
    window.addEventListener('scroll', changeColor);
  }, [])
  return (
    <>
      {/*<div className='bg-transparent  text-[#1F271B] fixed left-0 top-0 w-full z-10 ease-in duration-300 bg-cover bg-center custom-image pb-[2rem]'> */}
      <div className='bg-transparent  text-[#1F271B]  fixed left-0 top-0 w-full z-10 ease-in duration-300 bg-cover bg-center pb-[2rem]'>
        <Banner/>
        <div className='w-full absolute top-0 left-0'>
          <div className='flex justify-between items-center p-4'>
            <Link href='/'>
              <motion.img className="w-[200px] h-[auto]" width={200} height={50} src="/logo2.png"
                initial={{scale:0, opacity: 1}} animate={{rotate: 360, scale:1, opacity:1}} transition={{type: 'spring',duration: 2, delay: 4}}     
              />
            </Link>
            <motion.ul className='hidden sm:flex'
                initial={{scale:0, opacity: 1}} animate={{scale:1, opacity:1}} transition={{type: 'spring',duration: 2, delay: 4.5}}     
            >
              <li className='p-4 font-bold'>
                <Link href='/' scroll={false} onClick={()=>changePath('/home')}>Home</Link>
              </li>
              <li className='p-4 font-bold'>
                <Link href='/modules' scroll={false} onClick={()=>changePath('/modules')}>Modules</Link>
              </li>
              <li className='p-4 font-bold'>
                <Link href='/quizzes' scroll={false} onClick={()=>changePath('/quizzes')}>Quiz</Link>
              </li>
              <li className='p-4 font-bold'>
                <Link href='/pratice' scroll={false} onClick={()=>changePath('/practice')}>Practice</Link>
              </li>
              <li className='p-4 font-bold'>
                <Link href='/gpt' scroll={false} onClick={()=>changePath('/gpt')}>GPT</Link>
              </li>
            </motion.ul>
          </div>
        </div>  
      </div>
    </>
  )
}

export default Navbar