import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '@fontsource/playfair-display'
import '@fontsource/dancing-script'
import { motion } from 'framer-motion'


function Navbar() {
    return (
        <div>
            <header className='px-10 py-5 bg-[#eaecc6] text-[#102542] fixed top-0 z-10 w-full '>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ease: 'easeInOut', duration: 1.5, delay: 0.3 }}>
                        <div className='flex items-center justify-between'>
                    <div>
                        <h2 className='text-3xl font-[Dancing_Script] font-[700]'>Oladeji T.</h2>
                    </div>
                    <div className='flex items-center space-x-5'>
                        <nav className='md:flex md:space-x-5 '>
                            <div>
                                <Link to='/about' className='text-xl font-[400] hover:text-2xl hover:text-[#b8903b] '>About</Link>
                            </div>
                            <div>
                                <Link to='/' className='text-xl font-[400] hover:text-2xl hover:text-[#b8903b] '>Project</Link>
                            </div>
                            <div>
                                <Link to='/' className='text-xl font-[400] hover:text-2xl hover:text-[#b8903b] '>Contact</Link>
                            </div>
                            <div>
                                <Link to='/' className='text-xl font-[400] hover:text-2xl hover:text-[#b8903b] transition duration-200 ease-in-out opacity: 0'>Resume</Link>
                            </div>
                        </nav>
                        <div className='hidden'>
                            <button>
                                <FaBars className='text-2xl'/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='hidden'>
                    <div>
                        <Link to='' className='text-xl font-[400] hover:text-2xl hover:text-blue-500 '>About</Link>
                    </div>
                    <div>
                        <Link to='/' className='text-xl font-[400] hover:text-2xl hover:text-blue-500 '>Project</Link>
                    </div>
                    <div>
                        <Link to='/' className='text-xl font-[400] hover:text-2xl hover:text-blue-500 '>Contact</Link>
                    </div>
                    <div>
                        <Link to='/' className='text-xl font-[400] hover:text-2xl hover:text-blue-500 '>Resume</Link>
                    </div>
                </div>
                </motion.div>

            </header>
        </div>
    )
}

export default Navbar
