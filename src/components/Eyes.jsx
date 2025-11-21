import React, { useState, useEffect, useRef } from 'react';
import '../styles/Eyes.css';

const Eyes = () => {
  const svgRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMove = (e) => {
      const rect = svgRef.current?.getBoundingClientRect();
      if (!rect) return;
      const mx = (e.clientX - rect.left) / rect.width;
      const my = (e.clientY - rect.top) / rect.height;
      // clamp
      setMouse({ x: Math.max(0, Math.min(1, mx)), y: Math.max(0, Math.min(1, my)) });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  // calculate pupil offsets inside eye bounds
  const calc = (side) => {
    const maxX = 6; // px
    const maxY = 4; // px
    const cx = (mouse.x - 0.5) * 2 * maxX * (side === 'left' ? 1 : 1);
    const cy = (mouse.y - 0.5) * 2 * maxY;
    return { cx, cy };
  };

  const left = calc('left');
  const right = calc('right');

  return (
    <div className="eyes-wrapper" aria-hidden="true">
      <svg ref={svgRef} className="eyes-svg" width="220" height="60" viewBox="0 0 220 60" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(30,10)">
          <ellipse cx="0" cy="20" rx="28" ry="18" className="eye-shape" />
          <circle cx={left.cx} cy={20 + left.cy} r="6" className="pupil-shape" />
        </g>
        <g transform="translate(120,10)">
          <ellipse cx="0" cy="20" rx="28" ry="18" className="eye-shape" />
          <circle cx={right.cx} cy={20 + right.cy} r="6" className="pupil-shape" />
        </g>
      </svg>
    </div>
  );
};

export default Eyes;