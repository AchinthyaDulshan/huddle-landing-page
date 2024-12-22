import React from 'react'
import { FlowingConversationsSection, animateVariants } from './const'
import { motion } from 'motion/react'

const FlowingConversations = () => {
  return (
    // main section-FlowingConversations start 
        <section>
          <div className='max-w-screen-2xl md:py-10 p-5 md:px-10 mx-auto'>
            {/* card area start  */}
            <div className='rounded-xl shadow-lg lg:p-20 md:p-14 p-7 grid md:grid-cols-2 md:gap-5 gap-14 items-center'>
              {/* image area start  */}
              <div className='grid md:place-items-start place-items-center'>
                <motion.img variants={animateVariants.zoomIn} initial="staySmall" whileInView="normal" viewport={{ once: true, amount:0.8 }} className='md:w-4/5' src={FlowingConversationsSection.illustration} alt="image" />
              </div>
              {/* image area end  */}
              {/* text content start  */}
              <motion.div className='text-center md:text-left' variants={animateVariants.fromRight} initial="stayRight" whileInView="normal" viewport={{ once: true, amount:0.8 }}>
                <h2 className='text-2xl lg:text-4xl md:text-3xl pb-3 md:pb-5'>{FlowingConversationsSection.heading}</h2>
                <p className='text-sm lg:text-base text-GrayishBlue'>{FlowingConversationsSection.para}</p>
              </motion.div>
              {/* text content end  */}
            </div>
            {/* card area end  */}
          </div>
        </section>
        // main section-FlowingConversations end 
  )
}

export default FlowingConversations