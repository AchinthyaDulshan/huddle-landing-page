import React from 'react'
import { FooterSection, animateVariants } from './const'
import Copyright from './Copyright'
import { motion } from 'motion/react'

const Footer = () => {
  return (
    // Start footer section 
    <section id='footer' className='bg-VeryDarkCyan'>
      {/* footer container start  */}
      <div className='max-w-screen-2xl pt-44 pb-10 md:px-20 px-7  text-VeryPaleCyan mx-auto'>
        {/* logo start  */}
        <motion.img variants={animateVariants.zoomIn} initial="staySmall" whileInView="normal" viewport={{ once: true }} className='invert brightness-0 lg:w-1/6 md:w-1/3 w-1/2' src={FooterSection.logo} alt="Logo" />
        {/* logo end  */}
        {/* content area start  */}
        <div className='grid lg:grid-cols-3 gap-10 pt-10 '>
          {/* contact area start  */}
          <motion.div className='space-y-3' variants={animateVariants.fromLeft} initial="stayLeft" whileInView="normal" viewport={{ once: true }}>
            {/* location  */}
            <div className='grid grid-flow-col gap-5 place-content-start '>
              {FooterSection.location.icon}
              <a href={FooterSection.location.link}>{FooterSection.location.text}</a>
            </div>
            {/* call  */}
            <div className='grid grid-flow-col gap-5 place-content-start items-center'>
              {FooterSection.mobile.icon}
              <a href={FooterSection.mobile.link}>{FooterSection.mobile.text}</a>
            </div>
            {/* email  */}
            <div className='grid grid-flow-col gap-5 place-content-start items-center'>
              {FooterSection.email.icon}
              <a href={FooterSection.email.link}>{FooterSection.email.text}</a>
            </div>
          </motion.div>
          {/* contact area end  */}
          {/* navlinks area start  */}
          <div className='grid lg:grid-cols-2 lg:grid-rows-3 gap-3 items-center'>
            {FooterSection.navLinks.map((nav, index) => (
              <motion.a key={index} href={nav.Link} initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 0.5, delay: index * 0.2 } }} viewport={{ once: true }} className=' relative w-fit after:block after:h-0.5 after:bg-white after:absolute after:bottom-0 hover:after:w-full transition-all duration-200 after:ease-in-out after:transition-all after:duration-200 after:w-0'>{nav.text}</motion.a>
            ))}
          </div>
          {/* navlinks area end  */}
          {/* social media links area start  */}
          <div className='flex gap-10 justify-center items-center lg:justify-start lg:items-start'>
            {FooterSection.socialMedialinks.map((socialMedia, index) => (
              <motion.a key={index} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.5, delay: index * 0.2 } }} viewport={{ once: true }} className='rounded-full border w-10 h-10 flex justify-center items-center  transition-all duration-200 hover:border-Pink hover:text-Pink' href={socialMedia.link}>{socialMedia.icon}</motion.a>
            ))}
          </div>
          {/* social media links area end  */}
        </div>
        {/* content area end  */}
        {/* copyright area start  */}
        <Copyright />
        {/* copyright area end  */}
      </div>
      {/* footer container end  */}
    </section>
    // end Footer section 
  )
}

export default Footer
