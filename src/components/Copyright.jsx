import React from 'react'
import { CopyrightContent } from './const'

const Copyright = () => {
  return (
    // copyright area start 
    <div className='flex lg:justify-end justify-center items-center text-xs md:text-sm pt-10'>
        <p className='text-VeryPaleCyan'>&copy; {CopyrightContent.text}</p>
    </div>
    // copyright area end 

  )
}

export default Copyright