import React from 'react'
import { YourUsersSection, animateVariants } from './const'
import { motion } from 'motion/react'

const YourUsers = () => {
  return (
    // main section-YourUsers start 
    <section>
      <div className='max-w-screen-2xl pb-44 md:pt-10 p-5 md:px-10 mx-auto'>
        {/* card area start  */}
        <div className='rounded-xl shadow-lg lg:p-20 md:p-14 p-7 grid md:grid-cols-2 md:gap-5 gap-14 items-center'>
          {/* text content start  */}
          <motion.div className='order-2 text-center md:text-left md:order-1' variants={animateVariants.fromLeft} initial="stayLeft" whileInView="normal" viewport={{ once: true, amount:0.8 }}>
            <h2 className='text-2xl lg:text-4xl md:text-3xl pb-3 md:pb-5'>{YourUsersSection.heading}</h2>
            <p className='text-sm lg:text-base text-GrayishBlue'>{YourUsersSection.para}</p>
          </motion.div>
          {/* text content end  */}
          {/* image area start  */}
          <div className='grid md:place-items-end place-items-center order-1 md:order-2'>
            <motion.img variants={animateVariants.zoomIn} initial="staySmall" whileInView="normal" viewport={{ once: true, amount:0.8 }} className='md:w-4/5' src={YourUsersSection.illustration} alt="image" />
          </div>
          {/* image area end  */}
        </div>
        {/* card area end  */}
      </div>
    </section>
    // main section-YourUsers end 
  )
}

export default YourUsers