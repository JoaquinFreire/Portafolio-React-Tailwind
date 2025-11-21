import React from 'react'
import styled from "@emotion/styled"
import Css from '../img/css.png'
import BdSql from '../img/bd-sql.png'
import Git from '../img/git.png'
import Html from '../img/html.png'
import JavaScript from '../img/javascript.png'
import Java from '../img/java.png'
import Php from '../img/php.png'
import Reactjs from '../img/reactjs.png'
import Sass from '../img/sass.png'
import Tailwind from '../img/tailwind.png'
import Python from '../img/python.png'
import Office from '../img/office.png'

const Imagen = styled.img`
    max-width: 100px;
    width: 40%;
    display: block;
    border: 1px;
    border-radius: 10%;
    border-color: #ff26ff;

    @media (max-width: 768px) {
    max-width: 120px;
  }
`

const Skills = () => {
  return (
    <div className='  mb-10' id='skills'>
      <div className="flex justify-center items-center">
        <h1 className=" p-4 text-4xl text-[#FFFFFE] md:p-4 text-center md:text-5xl font-bold bg-[#017EAA] inline-block rounded-md">Development tools</h1>
      </div>
      <div className='mt-14  ml-20 mr-20 md:mt-14 md:m-auto grid grid-cols-2 justify-items-stretch gap-x-8 gap-y-10 md:flex md:w-7/12 md:flex-wrap md:justify-center md:gap-x-8 md:gap-y-5 '>
        <div className='bg-[#00101A] flex flex-col md:flex-row gap-x-2 items-center justify-center rounded-lg p-4 w-auto border-2 border-[#017EAA] hover:bg-[#00101A] transition-all'>
          <Imagen src={Html} alt='Logo html' />
          <h3 className='text-2xl md:text-3xl text-center text-bold text-[#FFFFFE]'>HTML5</h3>
        </div>
        <div className='md:h-32 md:w-64 bg-[#00101A] flex flex-col md:flex-row gap-x-2 items-center justify-center rounded-lg p-4 w-auto border-2 border-[#017EAA] hover:bg-[#00101A] transition-all'>
          <Imagen src={Css} alt='' />
          <h3 className='text-2xl md:text-3xl text-center text-bold text-[#FFFFFE]'>CSS3</h3>
        </div>
        <div className='md:h-32 md:w-64 bg-[#00101A] flex flex-col md:flex-row gap-x-2 items-center justify-center rounded-lg p-4 w-auto border-2 border-[#017EAA] hover:bg-[#00101A] transition-all'>
          <Imagen src={JavaScript} alt='' />
          <h3 className='text-2xl md:text-3xl text-center text-bold text-[#FFFFFE]'>JavaScript</h3>
        </div>
        <div className='md:h-32 md:w-64 bg-[#00101A] flex flex-col md:flex-row gap-x-2 items-center justify-center rounded-lg p-4 w-auto border-2 border-[#017EAA] hover:bg-[#00101A] transition-all'>
          <Imagen src={Php} alt='' />
          <h3 className='text-2xl md:text-3xl text-center text-bold text-[#FFFFFE]'>PHP</h3>
        </div>
        <div className='md:h-32 md:w-64 bg-[#00101A] flex flex-col md:flex-row gap-x-2 items-center justify-center rounded-lg p-4 w-auto border-2 border-[#017EAA] hover:bg-[#00101A] transition-all'>
          <Imagen src={Reactjs} alt='' />
          <h3 className='text-2xl md:text-3xl text-center text-bold text-[#FFFFFE]'>ReactJS</h3>
        </div>
        <div className='md:h-32 md:w-64 bg-[#00101A] flex flex-col md:flex-row gap-x-2 items-center justify-center rounded-lg p-4 w-auto border-2 border-[#017EAA] hover:bg-[#00101A] transition-all'>
          <Imagen src={Java} alt='' />
          <h3 className='text-2xl md:text-3xl text-center text-bold text-[#FFFFFE]'>Java</h3>
        </div>
        <div className='md:h-32 md:w-64 bg-[#00101A] flex flex-col md:flex-row gap-x-2 items-center justify-center rounded-lg p-4 w-auto border-2 border-[#017EAA] hover:bg-[#00101A] transition-all'>
          <Imagen src={BdSql} alt='' />
          <h3 className='text-2xl md:text-3xl text-center text-bold text-[#FFFFFE]'>SQL</h3>
        </div>

        <div className='md:h-32 md:w-64 bg-[#00101A] flex flex-col md:flex-row gap-x-2 items-center justify-center rounded-lg p-4 w-auto border-2 border-[#017EAA] hover:bg-[#00101A] transition-all'>
          <Imagen src={Tailwind} alt='' />
          <h3 className='text-2xl md:text-3xl text-center text-bold text-[#FFFFFE]'>Tailwind</h3>
        </div>
        <div className='md:h-32 md:w-64 bg-[#00101A] flex flex-col md:flex-row gap-x-2 items-center justify-center rounded-lg p-4 w-auto border-2 border-[#017EAA] hover:bg-[#00101A] transition-all'>
          <Imagen src={Sass} alt='' />
          <h3 className='text-2xl md:text-3xl text-center text-bold text-[#FFFFFE]'>SASS</h3>
        </div>
        <div className='md:h-32 md:w-64 bg-[#00101A] flex flex-col md:flex-row gap-x-2 items-center justify-center rounded-lg p-4 w-auto border-2 border-[#017EAA] hover:bg-[#00101A] transition-all'>
          <Imagen src={Python} alt='' />
          <h3 className='text-2xl md:text-3xl text-center text-bold text-[#FFFFFE]'>Python</h3>
        </div>
        <div className='md:h-32 md:w-64 bg-[#00101A] flex flex-col md:flex-row gap-x-2 items-center justify-center rounded-lg p-4 w-auto border-2 border-[#017EAA] hover:bg-[#00101A] transition-all'>
          <Imagen src={Office} alt='' />
          <h3 className='text-2xl md:text-3xl text-center text-bold text-[#FFFFFE]'>Office</h3>
        </div>
        <div className='md:h-32 md:w-64 bg-[#00101A] flex flex-col md:flex-row gap-x-2 items-center justify-center rounded-lg p-4 w-auto border-2 border-[#017EAA] hover:bg-[#00101A] transition-all'>
          <Imagen src={Git} alt='' />
          <h3 className='text-2xl md:text-3xl text-center text-bold text-[#FFFFFE]'>Git</h3>
        </div>




      </div>
    </div>
  )
}

export default Skills