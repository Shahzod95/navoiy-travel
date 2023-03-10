import React from 'react'
import Newsletter from '../Newsletter'
import userLetters from '../../assets/Images/usersletter.png'
import avatarLetters from '../../assets/Images/letterAvatar.png'
import { GrNext, GrPrevious } from 'react-icons/gr'

const NewLettersPage = () => {
    return (
        <div className='w-[100vw] h-[100vh]'>
            <Newsletter />
            <div className='lg:p-[4rem_6.25rem] flex gap-[6rem] flex-wrap sm:p-[2rem_2rem] leading-[3.3rem]'>
                <div className='w-[50%] h-[100%]'>
                    <img src={userLetters} />
                </div>
                <div className='w-[40%] h-[100%] p-[1rem]'>
                    <p className=' font-[600] text-[2rem] leading-[2.3rem] text-[#304578]'>Testimonials</p>
                    <div className='flex gap-[1.5rem] items-center font-[500] text-[1.3rem] leading-[25px] text-[#000] mt-[2.5rem]'>
                        <img src={avatarLetters} />
                        <p>Max Johnsan</p>
                    </div>
                    <p className='leading-[19px] text-[1rem] letter-text mt-[1rem] font-[400]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti aut iure ad autem nulla omnis commodi dolore vitae, eos consectetur tempore sit, cum ut obcaecati beatae asperiores accusamus. Quibusdam, saepe assumenda obcaecati cum provident dolores facere iure a adipisci dolore. Placeat cupiditate quisquam labore minus.</p><br />
                    <div className='flex justify-between items-center w-[4rem]'>
                        <GrPrevious className='hover:cursor-pointer' />
                        <GrNext className='hover:cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewLettersPage
