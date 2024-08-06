'use client'

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AnimationWrapper = ({ children }) => {
  useEffect(() => {
    
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  return <div>{children}</div>;
};

export default AnimationWrapper;
