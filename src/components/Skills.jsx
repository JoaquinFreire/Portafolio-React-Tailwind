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
import Photoshop from '../img/photoshop.png'
import Csharp from '../img/csharp.png'
import PuntoNet from '../img/puntonet.png'
import Postman from '../img/postman.png'
import Mongo from '../img/mongo.png'

const Imagen = styled.img`
    max-width: 80px;
    width: 80px;
    height: 80px;
    object-fit: contain;
    display: block;
    border-radius: 12%;
    background: transparent;

    @media (max-width: 768px) {
      max-width: 64px;
      width: 64px;
      height: 64px;
    }
`

const skillsList = [
  { src: Html, label: 'HTML5' },
  { src: Css, label: 'CSS3' },
  { src: JavaScript, label: 'JavaScript' },
  { src: Php, label: 'PHP' },
  { src: Reactjs, label: 'ReactJS' },
  { src: Java, label: 'Java' },
  { src: BdSql, label: 'SQL' },
  { src: Mongo, label: 'Mongo' },
  { src: Tailwind, label: 'Tailwind' },
  { src: Sass, label: 'SASS' },
  { src: Python, label: 'Python' },
  { src: Git, label: 'Git' },
  { src: Photoshop, label: 'Photoshop' },
  { src: Csharp, label: 'C#' },
  { src: PuntoNet, label: '.NET' },
  { src: Postman, label: 'Postman' },
  { src: Office, label: 'Office' },
]

const Skills = () => {
  return (
    <div className='mb-10' id='skills'>
      <div className="flex justify-center items-center">
        <h1 className="p-4 text-4xl text-[#FFFFFE] md:p-4 text-center md:text-5xl font-bold bg-[#017EAA] inline-block rounded-md">Development tools</h1>
      </div>

      {/* grid responsive: 2 cols mobile, 3 sm, 4 md, 6 lg */}
      <div className='mt-14 mx-4 md:mx-40 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center'>
        {skillsList.map((skill) => (
          <div key={skill.label} className='bg-[#00101A] flex flex-col items-center justify-center rounded-lg p-4 w-full max-w-xs border-2 border-[#017EAA] hover:bg-[#00121B] transition-all'>
            <Imagen src={skill.src} alt={`Logo ${skill.label}`} />
            <h3 className='mt-3 text-lg md:text-xl text-center font-semibold text-[#FFFFFE]'>{skill.label}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills