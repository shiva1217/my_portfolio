import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {DiJavascript1,DiReact,DiPython,DiJava} from "react-icons/di";
import { TbBrandVscode } from "react-icons/tb";
import { RiFlutterFill } from "react-icons/ri";
import { motion } from 'framer-motion';
import {fadeIn} from '../variants';
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";

function Techstacks() {
  return (
    <section className='section' id='techstacks'>
      <Row style={{ justifyContent: "center", paddingBottom: "50px", paddingTop:'20px' }}>
      <motion.div
        variants={fadeIn('down', 0.9)} initial='hidden' whileInView={'show'} viewport={{once: false, amount:0.3}}
        className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-10'>
          <div className='text-center '> 
            <h2 className='h2 leading-tight text-accent'>Tech Stacks   
           </h2>
          </div>
      </motion.div>
        <motion.div 
        variants={fadeIn('up', 0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount:0.3}}
        className="flex flex-row  sm:px-2 lg:px-15 flex-wrap gap-5">
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <IoLogoCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <RiFlutterFill />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaGitAlt />
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
      <FaGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <IoLogoFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiAdobeillustrator />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiAdobephotoshop />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <TbBrandVscode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiAdobeaftereffects />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      </motion.div>
    </Row>
 
     </section>
  );
}

export default Techstacks;



