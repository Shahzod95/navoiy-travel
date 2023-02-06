import React from 'react'
import Card from '../../components/Card/UsufulCard'
import UseImg1 from '../../Images/UseImg1.png'
import UseImg2 from '../../Images/UseImg2.png'
import UseImg3 from '../../Images/UseImg3.png'

const UsefulBlogPage = () => {
  return (
    <div className='w-full lg:p-[1.5rem_6rem] sm:p-[0px_2px]'>
      <p className='up-class font-normal text-[2.93rem] leding-[40px] text-center text-[#1A4D65]'>Useful blog about <br /> Navoi Region</p>
      <div className='flex justify-evenly items-center flex-wrap'>
        <Card image1={UseImg3} logged={true} />
        <Card image1={UseImg2} logged={true} />
        <Card image1={UseImg1} logged={true} />
      </div>
    </div>
  )
}

export default UsefulBlogPage