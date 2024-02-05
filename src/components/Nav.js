import React from 'react';
import { BsFillChatQuoteFill } from 'react-icons/bs';
import { Link} from 'react-scroll';
import { MdComputer } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { RiHomeHeartFill } from "react-icons/ri";
import { FcAbout } from "react-icons/fc";

const Nav= () => {
  return (
  <nav className='fixed bottom-2 1g: bottom-8 w-full overflow-hidden z-50'>
  <div className='container mx-auto'>
  <div className='w-full bg-black/20 h-[96px] backdrop-blur-2x1
  rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2x1 text-white/50'>
 <Link to='home' activeClass='active' smooth={true} spy={true} offset={-200} className='cursor-pointer w-[60px] h-[60px] flex items-center
justify-center'>
<RiHomeHeartFill />
</Link>
<Link to='about' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] flex items-center
justify-center'>
<FcAbout />
</Link>
<Link to='projects' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] flex items-center
justify-center'>
<MdComputer />
</Link>
<Link to='techstacks' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] flex items-center
justify-center'>
       <GrTechnology />
    </Link>
    <Link to='connect' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] flex items-center
justify-center'>
       <BsFillChatQuoteFill />
    </Link>
   </div>
</div>
</nav>
);
};

export default Nav;
