import React from 'react'
import Nature1 from '../../Image/nature1.png'
import Nature2 from '../../Image/nature2.png'
import Nature3 from '../../Image/nature3.png'
import natureWord from '../../Image/natureWord.png'

const Nature = ({nature1,nature2,text}) => {
    return (
        <div className={`w-[100vw] h-[100vh] ${nature1 ? 'bg-[#279768]' : nature2 ? 'bg-[#25979E]' : 'bg-[#F2A761]'} p-[4rem_7rem] flex items-center`}>
            <div className='float-left justify-center'>
                <img src={natureWord} />
                <p className='w-[28rem] mt-[12px] font-normal text-normal leading-[2rem] text-[#fff] text-[26px]'>{text}</p>
            </div>
            <div className='ml-[10rem]'>
                <img src={nature1 ? Nature1 : nature2 ? Nature2 : Nature3} className='w-[500px] h-[550px]' />
            </div>
        </div>
    )
}

export default Nature
