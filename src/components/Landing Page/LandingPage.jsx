import React from 'react'
import "./landingpage.css"
import Button from '../Common/Button'
import gradient from "../../assets/gradient.png"
import iphone from "../../assets/iphone.png"
import { motion } from 'framer-motion'

function LandingPage() {
  return (
    <div className='flex-info'>
        <div className='left'>
            <motion.h1 className='track-crypto-heading'
            initial={{opacity: 0, x: -50}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 1}}
            >Track Crypto</motion.h1>
            <motion.h1 className='real-time-heading'
            initial={{opacity: 0, x: 50}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 1, delay: 0.3}}
            >Real Time.</motion.h1>
            <motion.p className='info-text'
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1, delay: 1}}
            >Track crypto through the public Coingecko API in real time.</motion.p>
            <motion.div className="btn-flex"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1, delay: 1}}
            >
            </motion.div>
        </div>
        <div className='right'>
            <motion.img 
            src={iphone} 
            alt="Iphone" 
            className='iphone'
            initial={{y: -10}}
            animate={{y: 15}}
            transition={{
              type: 'smooth',
              repeatType: 'mirror',
              duration: 1,
              repeat: Infinity
            }}
            />
            <img src={gradient} alt="gradient" className='gradient'/>
        </div>
    </div>
  )
}

export default LandingPage