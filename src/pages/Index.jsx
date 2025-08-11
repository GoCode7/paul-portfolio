import React from 'react'
import { FaGithub, FaFacebook, FaSlack, FaDiscord, FaWhatsapp, FaLinkedin, FaInstagram, FaTwitter, FaArrowDown } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import '@fontsource/lobster'

function Index() {
  return (
    <div className='bg-[#102542] h-full'>
      <Navbar />
      <div className='flex w-full justify-center py-10 mt-10'>
        <div className='px-10 text-[#eaecc6] font-[Lobster] w-[50%] leading-[70px]'>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: 'easeInOut', duration: 1.5, delay: 0.2 }}
            className='text-[50px] font-[600]'>
            Hi i'm
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
            className='text-[70px]'
          >
            Oladeji Oluwalope
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: 'easeInOut', duration: 1.5, delay: 0.8 }}>
            <p className='text-[40px] '>an AI solutions consultant specializing in harnessing the power of Claude </p>
            <p className='mt-3 text-[30px] flex items-center gap-5'>Get In Touch <FaArrowDown /></p>
          </motion.p>
          <div className='space-x-10 text-3xl flex mt-5 '>
            <Link>
              <FaDiscord />
            </Link>
            <Link>
              <FaFacebook />
            </Link>
            <Link>
              <FaLinkedin />
            </Link>
            <Link>
              <FaSlack />
            </Link>
            <Link>
              <FaWhatsapp />
            </Link>
            <Link>
              <FaGithub />
            </Link>
            <Link>
              <FaInstagram />
            </Link>
            <Link>
              <FaTwitter />
            </Link>
          </div>
        </div>
        <div className='w-[50%]'>
        </div>
      </div>
      <div className='bg-[#eaecc6] h-[100vh] text-[#102542] py-10 px-10'>
        <div className='flex gap-10 items-center justify-center'>
          <div>
            <img src="images/About2.jpg" alt="" className='h-120 rounded-[3rem]' />
          </div>
          <div className=' justify-center mx-auto w-[50%]'>
            <h2 className=' text-4xl font-[Lobster]'>About Oluwalope</h2>
            <p className='text-[26px] mt-5 font-[500]'>I’m Oladeji Oluwalope — an AI solutions consultant specializing in Claude-powered automation, content creation, and intelligent workflows. I help businesses and individuals work smarter by integrating AI into their daily processes, saving time and boosting productivity.
              With a foundation in web development, I combine technical skill with AI innovation to deliver smart websites, interactive tools, and streamlined systems that go beyond traditional solutions. My goal is simple: turn AI potential into real-world results.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
