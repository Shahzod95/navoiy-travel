import React from 'react'
import { GrFormNext } from 'react-icons/gr'

const UsufulCard = ({ image1, logged }) => {
  return (
    <div className={`w-[20rem] transition-[.5s] mb-[3rem] ${logged ? 'hover:translate-y-[1.8rem]' : ''}`}>
    <img src={image1} className='transition-[.5s] hover:filter hover:opacity-[.4]' />
    <p className={`font-normal text-[1rem] leading-[1.5rem]`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
    <div className='flex items-center'>
        <div className='w-[55%] h-0 border-[1px] border-[solid] border-[#4F795B] mr-[10px]'></div>
        <div className='flex justify-center items-center font-light text-[1rem] text-[#8DB198] cursor-pointer leading-[19px] color-[#8DB198]'>
            Learn more <GrFormNext className='text-[22px]' />
        </div>
    </div>
</div>
  )
}

export default UsufulCard