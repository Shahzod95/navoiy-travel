import React from 'react'
import { GrNext } from 'react-icons/gr'
import data from '../../db'

const Packages = () => {
    return (
        <div className='w-[100vw] p-[6rem_7rem] bg-[#279768]'>
            <div className='text-[#fff] flex justify-between'>
                <div></div>
                <div className='packages font-normal text-[3.1rem] leading-[4rem] ml-[6.5rem]'>Packages</div>
                <div><p className='text-center flex justify-center items-center m-[1rem] gap-[.5rem] text-[18px] leading-[22px] cursor-pointer font-light' >All events <GrNext /></p></div>
            </div>
            <div className='flex justify-evenly gap-[1rem] mt-[5rem]'>
                {
                    data.packages.map((item) => {
                        return <div className='ease-in-out duration-500 transition-[.5s] hover:translate-y-[-20px]'>
                            <div className='relative cursor-pointer'>
                                <img src={item.image} />
                                <div className='absolute bottom-[12px] left-[1rem] z-[10] p-[.4rem] text-[#fff] font-[600] text-[1rem] leading-[1rem] bg-[#42A469]'>$ {item.cost}</div>
                            </div>
                            <div className='p-[1rem] bg-[#fff]'>
                                <p className='font-[700] text-[1.125rem] leading-[22px] text-[#333333]'>{item.title}</p>
                                <p className='font-[400] text-[.875rem] leading-[17px] text-[#333333]'>{item.text}</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Packages
