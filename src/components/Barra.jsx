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
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <nav className={`${navigationClassName} xl:flex xl:space-x-64 bg-navy-900 transition-all hover:bg-black bg-opacity-90  p-5 pt-3 pb-3 justify-center text-2xl w-full top-0 z-20  `}>
      <div className="flex items-center flex-shrink-0 ">
        <a href="/">
          <img className="h-10 w-60 m-auto" src={logo} alt="Logo" />
        </a>
        <p className=' hidden text-white ml-7 text-2xl mt-0 mb-0 md:block border-b hover:border-b-fuchsia-600 border-transparent transition-all'>
          <span className=' text-fuchsia-400'>P</span>rogrammer &  <span className=' text-fuchsia-400'>A</span>nalyst</p>
        <div className="xl:hidden ml-auto">
          <button onClick={toggleNav} className=' invert'>
            {isNavOpen ? (
              <img src={closeIcon} alt="Cerrar menú" />
            ) : (
              <img src={menuIcon} alt="Abrir menú" />
            )}
          </button>
        </div>
      </div>
      <div className={`xl:flex ${isNavOpen ? 'block' : 'hidden'} xl:items-center xl:justify-end xl:flex-1 xl:space-x-12 text-center font-bold`}>
        <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="block mt-4 xl:inline-block xl:mt-0 text-slate-200 hover:bg-fuchsia-600 hover:text-white p-3 rounded-3xl transition-all xl:hover:rotate-12 whitespace-no-wrap">
          About
        </a>
        <a href="#skills" onClick={(e) => handleLinkClick(e, 'skills')} className="block mt-4 xl:inline-block xl:mt-0 text-slate-200 hover:bg-fuchsia-600 hover:text-white p-3 rounded-3xl transition-all xl:hover:-rotate-12">
          Skills
        </a>
        <a href="#proyects" onClick={(e) => handleLinkClick(e, 'proyects')} className="block mt-4 xl:inline-block xl:mt-0 text-slate-200 hover:bg-fuchsia-600 hover:text-white p-3 rounded-3xl transition-all xl:hover:rotate-12">
          Proyects
        </a>
        <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="block mt-4 xl:inline-block xl:mt-0 text-slate-200 hover:bg-fuchsia-600 hover:text-white p-3 rounded-3xl transition-all xl:hover:-rotate-12">
          Contact
        </a>

      </div>
      <button onClick={(e) => handleLinkClick(e, 'about')} id="scroll-top-btn" className={`${subida} fixed bottom-10 right-1 md:bottom-5 md:right-5 m-4 p-2 transition-all bg-gray-300 hover:bg-white text-gray-800 rounded-full shadow-lg border border-black`} aria-label="Scroll to top">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 21" fill="black" className="w-8 h-8 hover:w-10 hover:h-10 transition-all">
          <path fillRule="evenodd" d="M 5 14 L 10 5 L 15 14" />
        </svg>
      </button>
    </nav>
  )
}
export default Barra;
