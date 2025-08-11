import React from 'react'
import Navbar2 from '../components/Navbar2'
import '@fontsource/lobster'

function About() {
    return (
        <div>
            <Navbar2 />
            <div className='mt-25 text-center px-10'>
                <h2 className='text-5xl font-[Lobster]'>About Me</h2>
                
                <p> Oladeji Oluwalope, an AI solutions consultant specializing in harnessing the power of Claude to help businesses and individuals work smarter, faster, and more creatively. I design custom AI-powered workflows that automate tasks, generate high-quality content, analyze data, and provide actionable insights — enabling my clients to focus on growth and innovation.
                    My approach is centered on practical AI integration. I work closely with clients to understand their needs, then implement Claude-driven strategies that improve efficiency, reduce manual workload, and enhance creativity. Whether it’s streamlining operations, producing professional content in record time, or building intelligent customer support systems, I ensure every solution is tailored, effective, and future-proof.
                    Alongside my AI expertise, I also bring a strong background in web development, enabling me to combine Claude’s capabilities with modern digital platforms. This allows me to deliver intelligent websites, interactive tools, and automation systems that go beyond traditional design and development.
                    I stay ahead of the curve by continually exploring new AI advancements, experimenting with Claude’s evolving features, and applying innovative solutions to real-world challenges. My mission is simple: help clients unlock the full potential of AI to achieve measurable results.</p>
            </div>
        </div>
    )
}

export default About
