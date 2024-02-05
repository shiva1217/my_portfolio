import React from 'react';
import { useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';





const About = () => {
  const [ref, inView] = useInView({
    threshold:0.5,
  });
  return (
  <section className='section' id='about' ref={ref}>
    <div className="container mx-auto">
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
         <motion.div
        variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount:0.3}}
        className='flex-1 bg-about bg-contain bg-no-repeat h-[400px]  mix-blend-lighten bg-top'></motion.div>
         <motion.div
              variants={fadeIn('left', 0.8)} initial='hidden' whileInView={'show'} viewport={{once: false, amount:0.3}}
               className='flex-1'>
                <h2 className='h2 text-accent'>About .me</h2>
                <h3 className='h3 mb-4'>A short intro of mine- Code Afficionados</h3>
                <p className='mb-6'>Passionate and innovative professional with a diverse skill set in web development,app development, design,Google cloud Practisioner, algorithmic problem-solving, and a deep enthusiasm for technology. I thrive in dynamic environments where I can apply my expertise to create impactful solutions and contribute to innovative projects. With a strong foundation combined with my proficiency, I possess the versatility to tackle complex challenges and deliver exceptional results. Constantly seeking opportunities to learn and grow, I am driven to shape the future through my passion for technology.</p>
         
         </motion.div>
      </div>
    </div>
  </section>
  );
  };
export default About;
