import { useState } from 'react';
import Barra from './Barra';
import Eyes from './Eyes';
import Perfil from '../img/perfil.jpg';
import Modal from './Modal';

const Header = () => {

  // Estado de clave para el cv
  const [mostrarModal, setMostrarModal] = useState(false);


  function handleLinkClick(e, sectionId) {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <header  className=''>
      <Barra />
      <Eyes />
      {mostrarModal && (
        <Modal mostrarModal={mostrarModal} setMostrarModal={setMostrarModal} />
      )}
      
      <div className='flex flex-col md:flex-row mt-36 md:ml-36 md:mr-36 items-center mb-32'>

        <div className='md:mr-24 mx-auto text-center'>
          <h1 className='w-auto text-2xl md:text-5xl text-white md:text-left inline-block bg-fuchsia-700 rounded-tl-3xl rounded-br-md p-5 text-center font-bold'>Hello Universe 👋
            <span className='border-b-2 border-fuchsia-800'>Welcome!</span>
          </h1>
          <p className='mt-5 text-white text-3xl leading-loose  md:leading-tight xl:leading-normal md:text-5xl md:text-left m-2 font-bold text-center'>My name is
            <span className='text-fuchsia-500'> Joaquin</span> <br />
            I live in Córdoba,
            <span className='text-fuchsia-500'> Argentina</span>  <br />
            I am a
            <span className='text-fuchsia-500'> Web Developer</span> <br />
            The
            <span className='text-fuchsia-500'> Back-End </span> motivates me.
          </p>
          <div className='flex gap-6 mt-10 flex-col md:flex-row'>
            <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>
              <button className= ' w-11/12 md:w-full text-white text-3xl pr-8 pl-8 pt-2 pb-2 text-center border-2 border-fuchsia-500 rounded-full bg-navy-800 hover:text-4xl transition-all hover:translate-y-2 hover:bg-navy-700'>📞Contact</button>
            </a>
            <a>
              <button onClick={() => setMostrarModal(true)} className='w-11/12 md:w-full text-white text-3xl pr-8 pl-8 pt-2 pb-2 text-center border-2 border-fuchsia-500 rounded-full bg-navy-800 hover:text-4xl transition-all hover:translate-y-2 hover:bg-navy-700'>🔐Resume</button>
            </a>

          </div>
        </div>

        <img src={Perfil} alt="Imagen Perfil" className='hidden md:block w-96 h-96 transition-all xl:w-100 xl:h-100 rounded-full border-2 border-fuchsia-900 grayscale hover:filter-none' />
      </div>
    </header>

  );
};

export default Header;