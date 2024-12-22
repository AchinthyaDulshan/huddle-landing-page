import React from 'react'
import { ReadyToBuildCard, animateVariants } from './const'
import { motion } from 'motion/react'

const ReadyToBuild = () => {
    return (
        // main container start 
        <motion.div className='mx-auto text-center w-[95dvw] md:w-[75dvw] lg:w-fit md:px-20 px-5 md:py-10 py-7 rounded-xl absolute bg-white left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg' variants={animateVariants.zoomIn} initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 0.5 } }} viewport={{ once: true, amount: 0.8 }}>
            {/* Heading text  */}
            <h1 className='lg:text-3xl md:text-2xl text-lg pb-5 md:pb-7'>{ReadyToBuildCard.mainText}</h1>
            {/* button  */}
            <a className='block mx-auto bg-Pink text-VeryPaleCyan lg:px-20 md:px-16 px-10 md:py-4 py-3 rounded-full shadow-2xl font-bold md:text-sm text-xs w-fit h-fit tracking-wide hover:bg-Pink/60 transition-all duration-200' href={ReadyToBuildCard.btn.link}>{ReadyToBuildCard.btn.text}</a>
        </motion.div>
        // main container end 
    )
}

export default ReadyToBuild