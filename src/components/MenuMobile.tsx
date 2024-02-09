'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { MapPin, Envelope, WhatsappLogo, InstagramLogo, YoutubeLogo, FacebookLogo } from '@phosphor-icons/react/dist/ssr'

export default function MenuMobile() {

  const [menuMobileIsOpen, setMenuMobileIsOpen] = useState(false)

  return (
    <div className='lg:hidden'>
      <div className='flex items-center justify-between px-6 z-10 bg-bgColor py-4 bg-opacity-95'>
        <Image src="/tarcioLogoColor.png" width={141} height={68} alt='Logo Tarcio Marques' />
        <button
          className='bg-mainColor p-3 rounded-md'
          onClick={()=>setMenuMobileIsOpen(true)}
        >
          <Image src="/burgerMenu.png" width={21} height={21} alt='Abrir menu mobile' />
        </button>
      </div>

      {menuMobileIsOpen && (
        <div className='bg-middleColor pt-4 h-screen w-full z-20 absolute top-0'>
          <div className='flex items-center justify-between px-6'>
            <Image src="/tarcioLogoColor.png" width={141} height={68} alt='Logo Tarcio Marques' />
            <button 
              className='bg-mainColor p-3 rounded-md'
              onClick={()=>setMenuMobileIsOpen(false)}
            >
              <Image src="/closeMenuMobile.png" width={21} height={21} alt='Abrir menu mobile' />
            </button>
          </div>
          <nav>
            <ul className='font-inter text-center text-2xl flex flex-col items-center gap-6 my-14'>
              <li
                className='text-fontColor cursor-pointer border-b-2 border-middleColor hover:text-mainColor hover:border-mainColor duration-300'
                onClick={()=>setMenuMobileIsOpen(false)}
               >
                <a href="#homeMobile">Home</a>
              </li>
              <li 
                className='text-fontColor cursor-pointer border-b-2 border-middleColor hover:text-mainColor hover:border-mainColor duration-300'
                onClick={()=>setMenuMobileIsOpen(false)}
              >
                <a href="#aboutMe">Quem sou eu</a>
              </li>
              <li 
                className='text-fontColor cursor-pointer border-b-2 border-middleColor hover:text-mainColor hover:border-mainColor duration-300'
                onClick={()=>setMenuMobileIsOpen(false)}
              >
                 <a href="#consultancy">Consultorias</a>
              </li>
              <li 
                className='text-fontColor cursor-pointer border-b-2 border-middleColor hover:text-mainColor hover:border-mainColor duration-300'
                onClick={()=>setMenuMobileIsOpen(false)}
              >
                <a href="#depositions">Depoimentos</a>
              </li>
            </ul>
          </nav>
          <div className='font-inter text-fontColor text-sm flex flex-col items-center mb-10'>
            <div className='flex gap-1'>
              <MapPin size={18} weight='fill' color='#FFF31B'/>
              <li>Av. Gov. Agamenon Magalhães, 4318- <br /> Paissandu, Recife - PE, 52010-075, Brasil.</li>
            </div>
            <div className='flex gap-2 my-3'>
              <Envelope size={18} weight='fill' color='#FFF31B'/>
              <p >tarciomnsilva@gmail.com</p>
            </div>
            <div className='flex gap-2'>
              <WhatsappLogo size={18} weight='fill' color='#FFF31B'/>
              <p>+55 (81) 98723-5056</p>
            </div>
          </div>
          <div className='flex gap-3 justify-center'>
            <a href="https://www.instagram.com/tarciomarquespersonal/" target='_blank'>
              <InstagramLogo 
                size={40} 
                weight='bold' 
                className='bg-mainColor rounded-full p-1 text-middleColor'
              />
            </a>

            <a href="https://www.youtube.com/@tarcioceifadorpersonal" target='_blank'>
              <YoutubeLogo 
                size={40} 
                weight='bold' 
                className='bg-mainColor rounded-full p-1 text-middleColor'
              />
            </a>

            <a href="https://www.facebook.com/TarcioMarquess" target='_blank'>
              <FacebookLogo 
                size={40} 
                weight='bold' 
                className='bg-mainColor rounded-full p-1 text-middleColor'
              />
            </a>

            <a href="https://wa.me/message/F7ZOGX6XXKEBD1" target='_blank'>
              <WhatsappLogo 
                size={40} 
                weight='bold' 
                className='bg-mainColor rounded-full p-1 text-middleColor'
              />
            </a>
          </div>
        </div> 
  )}

      
    </div>
  )
}
