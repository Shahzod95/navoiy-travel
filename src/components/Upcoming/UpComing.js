import React from 'react'
import { GrFormNext, GrNext } from 'react-icons/gr'
import data from '../../db'

const UpComing = () => {
    return (
        <div>
            <div className='w-full h-[50vh] bg-[#F6F6F6] pt-[2rem] text-center'>
                <p className='pt-[1rem] up-class font-normal text-[50px] leading-[59px] text-[#1A4D65] text-center'>Upcoming Events</p>
                <p className='text-center flex justify-center items-center m-[1rem] gap-[.5rem] text-[18px] font-light leading-[22px] text-[#0A9359] cursor-pointer' >All events <GrNext /></p>
            </div>
            <div className='w-full h-[60vh] bg-[#279768]'>
                <div className='absolute flex gap-[10rem] mt-[-9rem] ml-[20rem] text-[#fff]'>

                    {
                        data.upcoming.map((item) => {
                            return <div className={`w-[320px] ${item.transform ? 'translate-y-[30px]' : ''} ease-in-out duration-500 transition-[.1s] ${item.logged ? 'hover:translate-y-[50px]' : ''}`}>
                                <img src={item.image} />
                                <p className={`font-normal text-[16px] leding-[24px]`}>{item.text}</p>
                                <div className='flex items-center'>
                                    <div className='w-[55%] h-0 border-[1px] border-[solid] border-[#4F795B] mr-[10px]'></div>
                                    <div className='flex justify-center items-center font-light cursor-pointer text-[1rem] text-[#8DB198] leading-[19px] color-[#8DB198]'>
                                        Learn more <GrFormNext className='text-[22px]' />
                                    </div>
                                </div>
                            </div>
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default UpComing
