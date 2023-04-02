import React, { useState, useEffect } from 'react';
import '../styles/Eyes.css';

const Eyes = () => {
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const posX = clientX / window.innerWidth;
      const posY = clientY / window.innerHeight;
      setPosX(posX);
      setPosY(posY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="eyes">
      <div className="eye">
        <div className="pupil" style={{ left: posX * 30, top: posY * 15 }}></div>
      </div>
      <div className="eye">
        <div className="pupil" style={{ left: posX * 30, top: posY * 15 }}></div>
      </div>
    </div>
  );
};

export default Eyes;