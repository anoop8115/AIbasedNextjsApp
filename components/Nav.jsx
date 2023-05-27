"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
const Nav = () => {
    const isUserLoggedIn = true
    const [providers, setProviders] = useState(null)
    const [toggleDropdown, setToggleDropdown] = useState(false)
    useEffect(() => {
        const setProviders = async () => {
            const response = await getProviders();
        } 
      setProviders()  
    }, [])
  return (
      <nav className='flex justify-between items-center w-full mb-16 pt-3'>
          <Link href="/" className='flex gap-2 justify-center items-center'>
              <Image src="/images/logo.svg" alt="chatlogo" width={30} height={30} className='object-contain'></Image>
           <p className='max-sm:hidden font-satoshi font-semibold text-lg text-black tracking-wide'>CHAT GPT</p>
          </Link>
          {/* Desktop Navigation */}
          <div className='sm:flex hidden'>
              {isUserLoggedIn ? (<div className='flex gap-3 md:gap-5'>
                  <Link href="/crate-prompt" className='rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center'>Create Post</Link>
                   <button type="button" onClick={signOut} className='rounded-full border border-black bg-transparent py-1.5 px-5 text-black transition-all hover:bg-black hover:text-white text-center text-sm font-inter flex items-center justify-center'>Sign Out</button>
                  <Link href={'/profile'}><Image src={'/images/logo.svg'} width={'37'} height={37} ></Image></Link>
              </div>) : <>
                      {
                          providers && Object.values(providers).map((provider) => (
                              <button type="button" key={provider.name} onClick={() => signIn(provider.id)} className='rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center'>Sign In</button>
                          ))
                      }
              </>}
          </div>
          {/* mobile navigation */}
          <div className='sm:hidden flex relative'>
                {isUserLoggedIn ? (<div className='flex'>
                  <Image src={'/images/logo.svg'} width={'37'} height={37} className='rounded-full' onClick={() => setToggleDropdown( (prev) => !prev)}></Image>
                  {
                      toggleDropdown && (
                          <div className='absolute right-0 top-full mt-3 w-full p-5 rounded-lg bg-white min-w-[210px] flex flex-col gap-2 justify-end items-end'>
                              <Link href="/profile" className='text-sm font-inter text-gray-700 hover:text-gray-500 font-medium' onClick={() => setToggleDropdown(false)}>Create Prompt</Link>
                          <button type="button" className='mt-5 w-full rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center' onClick={() => {setToggleDropdown(false); signOut()}}>SignOut</button>
                          </div>
                      )
             }
              </div>) : <>
                      {
                          providers && Object.values(providers).map((provider) => (
                              <button type="button" key={provider.name} onClick={() => signIn(provider.id)} className='rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center'>Sign In</button>
                          ))
                      }
              </>}
          </div>
    </nav>
  )
}

export default Nav