import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import {images} from '../../constants'
import { urlFor, client } from '../../client';

import {AppWrap} from '../../wrapper/';
import './About.scss';

// const abouts = [
//   { title: 'Augmented Reality', description: 'We build augmented reality experiences.', imgUrl: images.ar},
//   { title: 'Virtual Reality', description: 'We build virtual reality experiences.', imgUrl: images.vr},
//   { title: 'Mixed Reality', description: 'We build mixed reality experiences.', imgUrl: images.mr}
// ];

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
  
    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, [])
  
  return (
    <>
        <h2 className='head-text'>
        I strive to <span> push the boundaries</span> <br /> of immersive content today to <span> manifest the imaginations of tomorrow.</span> 
        </h2>
        <br />
        <br />
        <h2>Meet Victoria</h2>

        <div className='app__profiles'>
        {abouts.map((about, index) =>(
          <motion.div
            whileInView={{opacity: 1}}
            whileHover={{scale:1.1}}
            transition={{duration: 0.5, type: 'tween'}}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2>
            <p className='p-text' style={{marginTop: 10}}>{about.description}</p>
         </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(About, 'about');