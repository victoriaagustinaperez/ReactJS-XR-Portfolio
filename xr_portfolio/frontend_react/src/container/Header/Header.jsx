import React from 'react';
import {motion} from 'framer-motion';

import {AppWrap} from '../../wrapper/';
import {images} from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
    <div id="home" className='app__header app__flex'>
      <motion.div
      whileInView={{x: [-100,0], opacity: [0,1] }}
      transition={{ duration: 1 }}
      className='app__header-info'
    >
      <div className='app__header-badge'>
        <div className='badge-cmp app__flex'>
          <span>🥽</span>
          <div style={{marginLeft: 20}}>
            {/* <h1 className='head-text'>EXTENDREALITY.CO</h1>
            <p className='p-text'>XR STUDIO IN MIAMI, FL</p> */}
            <p className='head-text'>Create the future with us.</p>
          </div>
        </div>

        <div className='tag-cmp app__flex'>
          <p className='p-text'>AR Apps and Services</p>
          <p className='p-text'>VR Design and Development</p>
          <p className='p-text'>MR Interactive Experiences</p>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={ {opacity: [0,1] }}
      transition={{ duration: 1, delayChildren: 1 }}
      className='app__header-img'
    >
      <img src={images.profile} alt="profile_bg" />
      <motion.img
        whileInView={ {scale: [0,1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variant={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.xr].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="circle" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home');