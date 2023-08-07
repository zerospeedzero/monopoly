import Link from 'next/link';
import React, {useState, useEffect} from 'react';
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
          <div className='flex justify-between items-center px-6 pt-1 pb-3'>
            <Link href='/'>
              <img className="w-[200px] h-[auto]" width={200} height={50} src="/logo2.png"
                // initial={{scale:0, opacity: 1}} animate={{rotate: 360, scale:1, opacity:1}} transition={{type: 'spring',duration: 2, delay: 4}}     
              />
            </Link>
            <motion.ul className='hidden sm:flex'
                initial={{scale:0, opacity: 1}} animate={{scale:1, opacity:1}} transition={{type: 'spring',duration: 2, delay: 4.5}}     
            >
              <li className='py-4 px-6 font-bold'>
                {/* <Link href='/' scroll={false} onClick={()=>changePath('/home')}><img src="icon_Greenhouses.png" alt="icon" height="40" width="40" /></Link> */}
                <Link className="flex flex-col justify-center items-center"  href='/' scroll={false} onClick={()=>changePath('/home')}>
                  <motion.img src='/icon_Greenhouses.png' width={30} height={30} alt="icon"
                    whileHover={{scale: 1.8,}}   transition={{duration: 2, type: "spring", stiffness: 100, damping: 10 }}
                  />
                  <span>Home</span>
                </Link>
              </li>
              <li className='py-4 px-6 font-bold'>
                <Link className="flex flex-col justify-center items-center"  href='/modules' scroll={false} onClick={()=>changePath('/modules')}>
                  <motion.img src='/icon_ExclamMark.png' width={30} height={30} alt="icon"
                    whileHover={{scale: 1.8,}}   transition={{duration: 2, type: "spring", stiffness: 100, damping: 10 }}
                  />
                  <span>Modules</span>
                </Link>
              </li>
              <li className='py-4 px-6 font-bold'>
                <Link className="flex flex-col justify-center items-center"  href='/quizzes' scroll={false} onClick={()=>changePath('/quizzes')}>
                  <motion.img src='/icon_questionMark.png' width={30} height={30} alt="icon"
                    whileHover={{scale: 1.8,}}   transition={{duration: 2, type: "spring", stiffness: 100, damping: 10 }}
                  />
                  <span>Quiz</span>
                </Link>
              </li>
              <li className='py-4 px-6 font-bold'>
                <Link className="flex flex-col justify-center items-center"  href='/practice' scroll={false} onClick={()=>changePath('/practice')}>
                  <motion.img src='/icon_hat.png' width={30} height={30} alt="icon"
                    whileHover={{scale: 1.8,}}   transition={{duration: 2, type: "spring", stiffness: 100, damping: 10 }}
                  />
                  <span>Practice</span>
                </Link>
              </li>
              <li className='py-4 px-6 font-bold'>
                <Link className="flex flex-col justify-center items-center"  href='/gpt' scroll={false} onClick={()=>changePath('/gpt')}>
                  <motion.img src='/icon_lightbulb.png' width={30} height={30} alt="icon"
                    whileHover={{scale: 1.8,}}   transition={{duration: 2, type: "spring", stiffness: 100, damping: 10 }}
                  />
                  <span>GPT</span>
                </Link>
              </li>
            </motion.ul>
          </div>
        </div>  
      </div>
    </>
  )
}

export default Navbar