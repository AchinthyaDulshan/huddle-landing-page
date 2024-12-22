import Logo from '../assets/images/logo.svg'
import illustration_1 from '../assets/images/illustrations/illustration-flowing-conversation.svg'
import illustration_2 from '../assets/images/illustrations/illustration-grow-together.svg'
import illustration_3 from '../assets/images/illustrations/illustration-mockups.svg'
import illustration_4 from '../assets/images/illustrations/illustration-your-users.svg'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaLocationDot, FaPhoneVolume, FaEnvelope } from "react-icons/fa6";


export const HeroSection = {
    logo: Logo,
    branding: 'Build The Community Your Fans Will Love',
    brandingPara: 'Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion. ',
    illustration: illustration_3,
    btn_1: { text: 'Try It Free', link: '' },
    btn_2: { text: 'Get Started For Free', link: '' }
}

export const FlowingConversationsSection = {
    heading: "Flowing Conversations",
    para: "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
    illustration: illustration_1
}

export const GrowTogetherSection = {
    heading: "Grow Together",
    para: "Generate meaningful discussions with your audience and build a strong, loyal community.Think of the insightful conversations you miss out on with a feedback form.",
    illustration: illustration_2
}

export const YourUsersSection = {
    heading: "Your Users",
    para: "It takes no time at all to integrate Huddle with your app's authentication solution.This means, once signed in to your app, your users can start chatting immediately.",
    illustration: illustration_4
}

export const FooterSection = {
    logo: Logo,
    location: {
        icon: <FaLocationDot />,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        link: '/'
    },
    mobile: {
        icon: <FaPhoneVolume />,
        text: '+1-543-123-4567',
        link: '/'
    },
    email: {
        icon: <FaEnvelope />,
        text: 'example@huddle.com',
        link: '/'
    },
    navLinks: [
        {
            text: "About Us",
            Link: '/',
        }, {
            text: "What We Do",
            Link: '/',
        }, {
            text: "FAQ",
            Link: '/',
        }, {
            text: "Career",
            Link: '/',
        }, {
            text: "Blog",
            Link: '/',
        }, {
            text: "Contact Us",
            Link: '/',
        }],

    socialMedialinks: [
        {
            icon: <FaFacebookF />,
            link: '/'
        },
        {
            icon: <FaTwitter />,
            link: '/'
        },
        {
            icon: <FaInstagram />,
            link: '/'
        }
    ]
}

export const ReadyToBuildCard = {
    mainText: 'Ready To Build Your Community?',
    btn: {
        text: 'Get Started For Free',
        link: '/'
    }
}

export const CopyrightContent = {
    text : 'Copyright 2018 Huddle. All rights reserved.'
}

export const animateVariants = {
    // From left to viewport animation
    fromLeft: {
      stayLeft: { opacity: 0, translateX: '-10vw' },
      normal: { opacity: 1, translateX: 0, transition: { duration: 0.5, ease: "easeInOut" } },
    },
  
    // Zoom in viewport animation
    zoomIn: {
      staySmall: { scale: 0 },
      normal: { scale: 1, transition: { duration: 0.5, ease: "easeInOut" } },
    },
  
    // From right to viewport animation
    fromRight: {
      stayRight: { opacity: 0, translateX: '10vw' },
      normal: { opacity: 1, translateX: 0, transition: { duration: 0.5, ease: "easeInOut" } },
    },
  
    // From top to viewport animation
    fromTop: {
      stayTop: { translateY: -50, opacity: 0},
      normal: { translateY: 0 ,opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
    },
  
  };