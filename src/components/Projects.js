import React from "react";
import cura from '../assets/portfolio-img1.png';
import news from '../assets/portfolio-img2.png';
import urbanhues from '../assets/portfolio-img3.png';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
function Projects() {
  return (
    <section className='section py-5' id='projects'>
    <motion.div
        variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount:0.3}}
        className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-10 sm:px-4'>
          <div className='text-center '> 
            <h2 className='h2 leading-tight text-accent'>My Projects   
           </h2>
          </div>
      </motion.div>

<motion.div
      variants={fadeIn('left', 0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount:0.3}}
      className="flex items-center justify-center min-h-screen mx-auto px-10 h-[20px] flex-wrap">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card">
            <div className="p-5 flex flex-col">
              <div className="rounded-xl overflow-hidden">
                <img src={cura} alt="" />
              </div>
              <h3 className="text-2xl md:text-3xl font-medium mt-3 ">Cura</h3>
              <p className="text-slate-500 text-lg mt-3">Designed UI of an old age flutter based app. The app has login feature donation feature as well as profile settings.</p>
              <a href='https://www.figma.com/file/vwkvbcANJ57Qe8zppbM839/Cura-(Copy)?type=design&node-id=644-10240&mode=design&t=5qdaCeByqzKHy4au-0' className="text-center bg-blue text-#61892f-700 py-2 rounded-lg font-semibold mt-4 hover:bg-#61892f-3 focus:scale-95 transition-all duration-200 ease-out">Visit</a>
            </div>
          </div>

          <div className="card">
            <div className="p-5 flex flex-col">
              <div className="rounded-xl overflow-hidden">
                <img src={news} alt="" />
              </div>
              <h3 className="text-2xl md:text-3xl font-medium mt-3 ">News App</h3>
              <p className="text-slate-500 text-lg mt-3">Designed UI of a News app.</p>
              <a href='https://www.figma.com/file/pygELbh1lNUJd6hvAd5svw/news-app?type=design&node-id=49-2571&mode=design&t=jw6DEdDYUUqLBkXH-0' className="text-center bg-blue text-#61892f-700 py-2 rounded-lg font-semibold mt-4 hover:bg-#61892f-3 focus:scale-95 transition-all duration-200 ease-out">Visit</a>
            </div>
          </div>

          <div className="card">
            <div className="p-5 flex flex-col">
              <div className="rounded-xl overflow-hidden">
                <img src={urbanhues} alt="" />
              </div>
              <h3 className="text-2xl md:text-3xl font-medium mt-3 ">UrbanHues</h3>
              <p className="text-slate-500 text-lg mt-3">Designed UI of a shopping app.</p>
              <a href='https://www.figma.com/file/Aj9nLfWdoqXiafB9tuaP0T/UrbanHues?type=design&node-id=0-1&mode=design&t=ribCBxg4BlUKGysr-0' className="text-center bg-blue text-#61892f-700 py-2 rounded-lg font-semibold mt-4 hover:bg-#61892f-3 focus:scale-95 transition-all duration-200 ease-out">Visit</a>
            </div>
          </div>
         </div>
        </motion.div>
    </section>
  );
}

export default Projects;