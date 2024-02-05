import React from 'react';
import Image from '../assets/avatar.svg';
import {FaGithub, FaLinkedin, FaFigma} from 'react-icons/fa';
import {TypeAnimation} from 'react-type-animation';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const Banner = () => {
  return <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
  <div className='container mx-auto'>
    <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-2'>
      <div className='flex-1 text-center font-secondary lg:text-left'>
        <motion.h1 variants={fadeIn('up',0.3)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.7}} className='text-[30px] font-bold leading-[0.8] lg:text-[60px]' >
          SHIVANGI <span>SINGH</span>
        </motion.h1>
        <motion.div
        variants={fadeIn('up',0.4)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.7}} 
        className='mb-6 text-[36px] lg:text-[35px] font-secondary font-semibold uppercase leading-[1]'>
          <span className='text-white mr-4'>I am a </span>
        <TypeAnimation sequence={[
          'Web-Developer',
          2000,
          'Designer',
          2000,
          'Android-Developer',
          2000,
         ]}
         speed={50}
         className='text-accent'
         wrapper='span'
         repeat={Infinity}
         />
         
        </motion.div>
        <motion.p
        variants={fadeIn('up',0.5)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.7}}
        className='mb-8 max-w-lg mx-auto lg:mx-0'>Web Developer | App Developer | Open Source Enthusiast |
        Graphic Designer | GCP | Microsoft Learn Student Ambassador
        </motion.p>
        <motion.div 
        variants={fadeIn('up',0.6)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.7}}
        className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0 text-black'>
          <p>a, 3rd year EE Undergrad @ NIT Patna</p>
        </motion.div>
        <motion.div
        variants={fadeIn('up',0.7)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.7}}
        className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
          <a href='https://github.com/shiva1217' className='mr-4 text-2xl'>
            <FaGithub />
          </a>
          <a href='https://www.linkedin.com/in/shivangisingh1217/' className='mr-4 text-2xl'>
            <FaLinkedin />
          </a>
          <a href='https://www.figma.com/@shivangisingh3' className='mr-4 text-2xl'>
            <FaFigma />
          </a>
      </motion.div>

      
     
    </div>
    <motion.div
      variants={fadeIn('down',0.8)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.7}}
      className='hidden lg:flex flex-1 max-w-[200px] lg:max-w-[350px] '>
       <img src={Image} alt=''/>
      </motion.div>
  </div>
  </div>
  </section>
  };
export default Banner;
