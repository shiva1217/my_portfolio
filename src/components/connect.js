import React from 'react';
import { motion } from 'framer-motion';
import {fadeIn} from '../variants';


const Connect = () => {
return (
<section className='py-16 lg:selection' id='connect'>
    <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
            <motion.div 
              variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount:0.3}}
              className='flex-1 flex justify-start items-center'>
               <div>
                  <h4 className='text-x1 uppercase text-accent font-medium mb-2 tracking-wide'>Get in Touch </h4>
                  <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>lets <br />Connect</h2>
                </div>
            </motion.div>
                <form className='flex-1 border rounded-b-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'
                action="https://formspree.io/f/xayryygd"
                method="POST"
                enctype="multipart/form-data"
                >
                    <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type="text" required name="user-name"
                    placeholder='Your Name'
                    />
                    <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type="email" required name="email"
                    placeholder='Your Mail'
                    />
                    <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12' placeholder='Message'name="message" ></textarea>
                    <button className='btn btn-lg' type="submit">Send</button>
                </form>
        </div>
    </div>
     </section>
    );
};

export default Connect;