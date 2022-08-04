import React from 'react';
import { BsLinkedin, BsInstagram, BsDiscord} from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/victoriaagustinaperez/" target="_blank" rel="noreferrer">
        <BsLinkedin color="#0e76a8"/>
        </a>
    </div>
    <div>
      <a href="https://www.instagram.com/xrbyvictoria/?hl=en" target="_blank" rel="noreferrer">
          <BsInstagram color="000"/>
          </a>
    </div>
    <div>
          <a href="https://discord.gg/UTfHRWk8" target="_blank" rel="noreferrer">
          <BsDiscord color="#738adb"/>
          </a>
    </div>
  </div>
);

export default SocialMedia;
