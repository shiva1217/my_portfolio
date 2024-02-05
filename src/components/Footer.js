import React from 'react';
import {AiFillGithub,AiOutlineTwitter,AiFillInstagram, AiFillFacebook} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return (
      <footer className='py-12'>
        <div className='container mx-auto'>
          <div className='flex flex-col items-center justify-between'>
            <div className='flex gap-x-6 mx-auto xl:mx-0 mb-4'>
             <a href='https://github.com/shiva1217' className='mr-4 text-2xl'>
            <AiFillGithub />
            </a>
            <a href='https://www.linkedin.com/in/shivangisingh1217/' className='mr-4 text-2xl'>
            <FaLinkedinIn />
            </a>
            <a href='https://twitter.com/home' className='mr-4 text-2xl'>
            <AiOutlineTwitter/>
            </a>
            <a href='https://www.instagram.com/shivangis1217/' className='mr-4 text-2xl'>
            <AiFillInstagram/>
            </a>
            <a href='https://www.facebook.com/?sk=welcome' className='mr-4 text-2xl'>
            <AiFillFacebook/>
            </a>
            </div>
            <div className='text-muted-foreground'>
            <h3>Designed and Developed by Shivangi Singh. <br />&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;Copyright © {year} SS </h3>
            </div>
          </div>
        </div>
      </footer>
      );
  }
export default Footer;
