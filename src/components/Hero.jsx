import React from 'react'
import { HeroSection, animateVariants } from './const'
import { motion } from 'motion/react'

const Hero = () => {
    return (
        // hero section start 
        <section className='bg-bgMobile md:bg-bgDesktop bg-cover bg-center bg-no-repeat '>
            {/* hero container start  */}
            <div className='container md:py-10 py-7 md:px-10 px-7 max-w-screen-2xl mx-auto overflow-x-hidden'>
                {/* nav start  */}
                <motion.div variants={animateVariants.fromTop} initial="stayTop" whileInView="normal" viewport={{ once: true }} className='flex justify-between items-center'>
                    {/* logo image  */}
                    <img src={HeroSection.logo} alt="logo" className='md:h-7 h-5' />
                    {/* button  */}
                    <a href={HeroSection.btn_1.link} className='text-VeryDarkCyan font-bold px-5 md:px-10 py-2 rounded-full text-xs md:text-base bg-white drop-shadow-xl hover:text-GrayishBlue transition-all duration-200'>{HeroSection.btn_1.text}</a>
                </motion.div>
                {/* nav end  */}
                {/* Hero content start  */}
                <div className='grid md:grid-cols-2 gap-3 px-5 md:px-7 mx-auto md:pt-10 pt-24'>
                    {/* hero text start  */}
                    <motion.div className='grid gap-10 content-center text-center md:text-left' variants={animateVariants.fromLeft} initial="stayLeft" whileInView="normal" viewport={{ once: true }}>
                        {/* branding  */}
                        <h1 className='md:text-3xl lg:text-5xl text-VeryDarkCyan text-2xl'>{HeroSection.branding}</h1>
                        {/* branding paragraph  */}
                        <p className='lg:text-lg text-base text-VeryDarkCyan'>{HeroSection.brandingPara}</p>
                        {/* button  */}
                        <a className='block bg-Pink text-VeryPaleCyan md:px-20 px-14 py-3 rounded-full shadow-2xl font-bold md:text-sm text-xs w-fit h-fit tracking-wide mx-auto md:mx-0 hover:bg-Pink/60 transition-all duration-200' href={HeroSection.btn_2.link}>{HeroSection.btn_2.text}</a>
                    </motion.div>
                    {/* hero text end  */}
                    {/* hero image start  */}
                    <div className='pt-10 md:pt-0'>
                        <motion.img variants={animateVariants.zoomIn} initial="staySmall" whileInView="normal" viewport={{ once: true }} src={HeroSection.illustration}  className='' alt="" />
                    </div>
                    {/* hero image end  */}
                </div>
                {/* Hero content end  */}
            </div>
            {/* hero container end  */}
        </section>
        // hero section end 
    )
}

export default Hero