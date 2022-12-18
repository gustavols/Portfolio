import react from 'react'
import { Routes } from 'react-router-dom'

import Logo from '../../assets/gustavols-logo.svg'

import HeaderImage from '../../assets/header-image.png'

import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { CgScrollV } from "react-icons/cg";

export function Home() {
  return (
    <div className='w-screen h-screen flex'>
      <div className="w-8/12 h-screen bg-white" >
        <div className='h-1/6 w-full flex items-center py-10 px-44'>
          <img src={Logo} style={{width: '20%'}}/>
          <FaGithub className='ml-24 text-indigo-500 text-2xl' />
          <p className='font-padrao text-lg text-indigo-500 ml-2 font-medium tracking-wider'>Github</p>
          <FaLinkedin className='ml-24 text-indigo-500 text-2xl' />
          <p className='font-padrao text-lg text-indigo-500 ml-2 font-medium tracking-wider'>Linkedin</p>
        </div>
        <div className='h-4/6 w-full flex flex-col justify-center py-10 px-44'>
          <div className='flex flex-row items-center'>
            <hr className='h-1 w-20 bg-indigo-500'/>
            <h3 className='font-inter text-xl mx-4 text-indigo-500 font-semibold'>Gustavo Santos</h3>
          </div>
          <div>
            <h1 className='font-inter text-7xl font-bold leading-tight'>Hello, my<br></br>name's Gustavo.<br></br>I'm Front End<br></br>Developer.</h1>
          </div>
        </div>
        <div className='h-1/6 w-full flex flex-row items-center px-44'>
          <div className='w-16 h-16 rounded-full bg-slate-300 flex flex-row items-center justify-center' >
            <CgScrollV className='text-black text-3xl' />
          </div>
          <div>
            <p className='font-inter text-xl mx-4 text-indigo-500 font-semibold'>Scroll down</p>
          </div>
        </div>
      </div>
      <div className="w-4/12 h-screen bg-indigo-700 flex justify-start items-center" >
        <img src={HeaderImage} className='w-full' />
      </div>
    </div>
  )
}