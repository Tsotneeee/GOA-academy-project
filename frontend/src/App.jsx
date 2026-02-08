// import { useState } from 'react'
import './App.css'

import { FaCode } from "react-icons/fa6";
import { LuSparkles } from "react-icons/lu";
import { TbUsers } from "react-icons/tb";
import { LuZap } from "react-icons/lu";

import { Link } from 'react-router';
import { useStore } from './store/store';
import NavBar from './components/NavBar';

function App() {
  const { theme, lang } = useStore();

  return (
    <>
      <div className={`${theme === 'light' ? 'bg-[#eff0f2]' : 'bg-[#080C17]'} min-h-screen`}>
        <div id='main' className='min-h-screen'>
          <div className='bg-glow top-[30%] left-[30%]'></div>
          <div className='bg-glow top-[20%] right-[20%]'></div>
          <div className='bg-glow bottom-0 right-0'></div>

          <NavBar />

          <FaCode className='floating-icon top-37.5 left-75 text-[#1d724a]' />
          <LuSparkles className='floating-icon top-50 right-100 text-[#1d724a]' />
          <TbUsers className='floating-icon bottom-40 left-100 text-purple-500' />
          <LuZap className='floating-icon bottom-50 right-75 text-yellow-500' />

          <div id='text-main' className='mt-[10%] flex justify-center items-center flex-col mb-46.5'>
            <div className={`${theme === 'light' ? 'bg-[#d7e0e0] text-[#1d724a]' : 'bg-[#0e1921] text-[#237550]'} flex justify-center items-center gap-2 font-medium px-5 py-2 rounded-full text-sm`}>
              <LuSparkles />
              <span>{lang === 'en' ? "Georgia's Premier Programming Academy" : 'საქართველოს პრემიერ პროგრამირების აკადემია'}</span>
            </div>
            <h1 
              className={`${theme === 'light' ? 'text-black' : 'text-white'} text-8xl font-black mt-7`}
                >
                  {lang === 'en' ? 'Welcome to' : 'მოგესალმებით'}
                  <span 
                    className='ml-5 bg-linear-to-br from-[#064E3B] via-[#047857] to-[#6bb469] bg-clip-text text-transparent'
                    >
                    GOA
                  </span>
                  {lang === 'en' ? '' : '-ში'}
            </h1>
            <p 
              className={`${theme === 'light' ? 'text-[#65758b]' : 'text-[#94a3b8]'}  text-2xl text-center w-182 mt-7`}
              >
                {lang === 'en' ? 'Master programming with expert mentors, join a thriving community, and build your future in tech.' : 'დაეუფლეთ პროგრამირებას ექსპერტ მენტორებთან ერთად, შეუერთდით აყვავებულ საზოგადოებას და ააშენეთ თქვენი მომავალი ტექნოლოგიებში.'}
            </p>
            <Link to={'#'} className={`${theme === 'light' ? 'bg-[#1d724a] hover:bg-[#317e5b] shadow-[0_0_12px_rgba(107,180,105,0.8)]' : 'bg-[#257e55] hover:bg-[#22734f] shadow-[0_0_6px_rgba(107,180,105,1)]'} flex justify-center items-center gap-4 text-white text-xl font-medium px-8 py-3.5 rounded-xl mt-10 cursor-pointer hover:scale-107 transition-all duration-200`}>
              <FaCode />
              {lang === 'en' ? 'Join GOA' : 'შემოუერთდი GOA-ს'}
            </Link>
            <div className={`${theme === 'light' ? 'border-[#e6eaf2]' : 'border-[#151e2d]'} flex justify-center items-center gap-15 mt-15 pt-10 border-t w-[40%]`}>
              <div className='text-center'>
                <p className='text-3xl font-bold bg-linear-to-br from-[#064E3B] via-[#047857] to-[#6bb469] bg-clip-text text-transparent'>1000+</p>
                <p 
                  className={`${theme === 'light' ? 'text-[#65758b]' : 'text-[#94a3b8]'}`}
                  >
                    {lang === 'en' ? 'Students' : 'სტუდენტები'}
                </p>
              </div>
              <div className='text-center'>
                <p className='text-3xl font-bold bg-linear-to-br from-[#064E3B] via-[#047857] to-[#6bb469] bg-clip-text text-transparent'>20+</p>
                <p 
                  className={`${theme === 'light' ? 'text-[#65758b]' : 'text-[#94a3b8]'}`}
                  >
                    {lang === 'en' ? 'Expert Mentors' : 'ექსპერტი მენტორები'}
                </p>
              </div>
              <div className='text-center'>
                <p className='text-3xl font-bold bg-linear-to-br from-[#064E3B] via-[#047857] to-[#6bb469] bg-clip-text text-transparent'>90+</p>
                <p 
                  className={`${theme === 'light' ? 'text-[#65758b]' : 'text-[#94a3b8]'}`}
                  >
                    {lang === 'en' ? 'Learning Groups' : 'სასწავლო ჯგუფები'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App