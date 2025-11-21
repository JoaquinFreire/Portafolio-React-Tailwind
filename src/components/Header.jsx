import { useState, useEffect } from 'react';
import Barra from './Barra';
import Eyes from './Eyes';
import Modal from './Modal';
/* import ColorPicker from './ColorPicker'; */

const Header = () => {

  // Estado de clave para el cv
  const [mostrarModal, setMostrarModal] = useState(false);


  function handleLinkClick(e, sectionId) {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <header className=''>
      <Barra />
      <Eyes />
      {/* <ColorPicker/> */}
      {mostrarModal && (
        <Modal mostrarModal={mostrarModal} setMostrarModal={setMostrarModal} />
      )}

      <div className='flex flex-col items-center mt-24 md:mt-36 md:ml-36 md:mr-36 mb-24'>
        <div className='w-full max-w-3xl text-center mx-auto'>
          <h1 className='mt-10 w-auto text-2xl md:text-5xl text-[#FFFFFE] inline-block bg-[#017EAA] rounded-tl-3xl rounded-br-md p-5 text-center font-bold'>Hello Universe 👋
            <span className='block mt-2 text-sm text-[#FFFFFE]/80'>Welcome!</span>
          </h1>

          <p className='mt-6 text-[#FFFFFE] text-2xl md:text-4xl leading-tight m-2 font-bold text-center'>
            My name is <span className='text-[#00A8E6]'>Joaquin</span> — I live in <span className='text-[#00A8E6]'>Córdoba, Argentina</span>.
            <br className='hidden md:block' />
            I'm a <span className='text-[#00A8E6]'>Web Developer</span> focused on Back-End.
          </p>

          <div className='flex gap-6 mt-8 justify-center'>
            <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>
              <button className='inline-flex items-center gap-3 px-8 py-3 text-lg text-[#FFFFFE] border-2 border-[#017EAA] rounded-full bg-transparent hover:bg-[#00A8E6] hover:text-[#00101A] transform transition-all duration-200 hover:scale-105 shadow-sm'>
                📞 Contact
              </button>
            </a>

            <button onClick={() => setMostrarModal(true)} className='inline-flex items-center gap-3 px-8 py-3 text-lg text-[#00101A] border-2 border-[#00A8E6] rounded-full bg-[#00A8E6] hover:bg-[#017EAA] hover:shadow-lg transform transition-all duration-200 hover:scale-105'>
              🔐 Resume
            </button>
          </div>
        </div>

        {/* removed profile image to test layout without it */}
      </div>
    </header>

  );
};

export default Header;