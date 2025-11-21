import { useState, useEffect } from 'react';

import logo from '../img/logo.svg';
import menuIcon from '../img/menu.svg';
import closeIcon from '../img/menu-cerrar.svg';
export const Barra = ({color1}) => {

  
  // Boton de navegación - menu
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Ocultar y Mostrar navegación 
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const skillsElement = document.getElementById('skills');
    const skillsOffset = skillsElement.offsetTop;

    const handleScroll = () => {
      if (window.pageYOffset >= skillsOffset) {
        setIsFixed(false);
      } else {
        setIsFixed(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigationClassName = isFixed ? 'fixed' : "fixed md:absolute md:hidden";
  const subida = isFixed ? 'hidden' : 'fixed'


  // Scroll lento
  function handleLinkClick(e, sectionId) {
    e.preventDefault();
    setIsNavOpen(!isNavOpen);
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <nav className={`${navigationClassName} xl:flex xl:space-x-64 bg-[#00101A]/80 backdrop-blur-sm  p-4 justify-between items-center text-2xl w-full top-0 z-30 rounded-b-lg shadow-lg`}>
      <div className="flex items-center flex-shrink-0 gap-4">
        <a href="/" className="flex items-center gap-4">
          <img className="h-10 w-60" src={logo} alt="Logo" />
        </a>
        <p className=' hidden text-[#FFFFFE] ml-2 text-lg md:block transition-colors'>
          <span className=' text-[#00A8E6]'>P</span>rogrammer & <span className=' text-[#00A8E6]'>A</span>nalyst
        </p>

        <div className="xl:hidden ml-auto">
          <button onClick={toggleNav} aria-label="toggle menu" className='p-2 rounded-md bg-transparent'>
            {isNavOpen ? (
              <img src={closeIcon} alt="Cerrar menú" />
            ) : (
              <img src={menuIcon} alt="Abrir menú" />
            )}
          </button>
        </div>
      </div>

      <div className={`xl:flex ${isNavOpen ? 'block' : 'hidden'} xl:items-center xl:justify-end xl:flex-1 xl:space-x-6 text-center font-bold flex-nowrap`}>
        <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="inline-flex items-center px-4 py-2 rounded-full text-[#FFFFFE] transition transform hover:scale-105 hover:shadow-lg whitespace-nowrap"
           style={{ background: 'linear-gradient(90deg, transparent, rgba(0,47,87,0.06))' }}>
          About
        </a>
        <a href="#skills" onClick={(e) => handleLinkClick(e, 'skills')} className="inline-flex items-center px-4 py-2 rounded-full text-[#FFFFFE] transition transform hover:scale-105 hover:shadow-lg whitespace-nowrap"
           style={{ background: 'linear-gradient(90deg, transparent, rgba(1,126,170,0.06))' }}>
          Skills
        </a>
        <a href="#proyects" onClick={(e) => handleLinkClick(e, 'proyects')} className="inline-flex items-center px-4 py-2 rounded-full text-[#FFFFFE] transition transform hover:scale-105 hover:shadow-lg whitespace-nowrap"
           style={{ background: 'linear-gradient(90deg, transparent, rgba(0,168,230,0.06))' }}>
          Proyects
        </a>
        <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="inline-flex items-center px-4 py-2 rounded-full text-[#FFFFFE] transition transform hover:scale-105 hover:shadow-lg whitespace-nowrap"
           style={{ background: 'linear-gradient(90deg, transparent, rgba(1,126,170,0.06))' }}>
          Contact
        </a>
      </div>

      <button onClick={(e) => handleLinkClick(e, 'about')} id="scroll-top-btn" className={`${subida} fixed bottom-10 right-1 md:bottom-5 md:right-5 m-4 p-2 transition-all bg-[#00A8E6] hover:bg-[#017EAA] text-[#00101A] rounded-full shadow-xl border border-[#00101A]`} aria-label="Scroll to top">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 21" fill="#00101A" className="w-8 h-8 hover:w-9 hover:h-9 transition-all">
          <path fillRule="evenodd" d="M 5 14 L 10 5 L 15 14" />
        </svg>
      </button>
    </nav>
  )
}
export default Barra;
