import React from 'react'
import { useState } from 'react'
import styled from "@emotion/styled"
import BienesRaices from "../img/proyectos/bienesraices.png"
import ControlDeGastos from "../img/proyectos/controldegastos.png"
import CotizadorCripto from "../img/proyectos/cotizadorcripto.png"
import FestivalMusica from "../img/proyectos/festivalmusica.png"

const Imagen = styled.img`
    max-width: 430px;
    width: 170%;
    display: block; 
    filter: blur(2px);
    overflow: hidden;
    transition: all;
    
    @media (max-width: 768px) {
    /* max-width: 180px; */
    width: 100%;
    margin-bottom: 2rem;
    filter: none;
  }
  @media (min-width: 768px) {
    &:hover {
    transition: all;
    transition-duration: 800ms;
    filter: blur(0px);
    max-width: 460px;
    width: 180%;
    
  }
  }
  
  
`

const Proyects = () => {

    const [mostrarTodos, setMostrarTodos] = useState(false);


    const toggleMostrarTodos = () => {
        setMostrarTodos(!mostrarTodos);
    };
    return (
        <>
            <div id='proyects' className="flex justify-center items-center mb-12 mt-32 ">
                <h1 className=" p-4 text-4xl text-white md:p-4 text-center md:text-5xl font-bold bg-fuchsia-600 inline-block rounded-md">My Proyects</h1>
            </div>
            <div className='   transition-all mx-10 bg-navy-800 border-2 border-fuchsia-700  md:border-white hover:border-fuchsia-700 rounded-2xl md:ml-32 md:mr-32 mb-16'>
                <div className=' p-4 flex flex-col gap-x-6 md:flex-row  items-center'>
                    <Imagen src={BienesRaices} alt='Imagen proyecto' />
                    <div className='flex flex-col w-82 md:w-auto  '>
                        <h2 className='text-white text-center hoper:shadow-xl border-l-2 border-r-2 border-fuchsia-700 text-4xl text-bold text-left max-w-full uppercase mb-4'>Bienes Raices</h2>
                        <div className='m-4 md:ml-0 flex flex-col md:flex-row'>
                            <a target='_blanck' href="https://joaquinfreireportafolio.netlify.app/bienesraices/index.html" className=' text-fuchsia-700 text-bold border-2 hover:border-none border-fuchsia-700 transition-all hover:text-3xl hover:bg-white rounded-md m-2 md:m-0 text-center bg-navy-800 text-2xl p-4 md:mr-10'>Deployed🚀</a>
                            <a target='_blanck' href="https://github.com/JoaquinFreire/BienesRaices-MVC" className=' text-fuchsia-700 text-bold border-2 hover:border-none border-fuchsia-700 transition-all hover:text-3xl hover:bg-white rounded-md m-2 md:m-0 text-center bg-navy-800 text-2xl p-4 md:mr-10'>Repository📁</a>
                        </div>
                        <p className='text-white text-md mx-6 md:mx-0 md:text-xl text-left'>Project for buying and selling properties using OOP, with an administrator section including CRUD and the following tools.</p>
                        <div className=' mx-6 md:mx-0 mt-2 text-center md:text-left'>
                            <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>MVC</span>
                            <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>PHP8</span>
                            <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>SASS</span>
                            <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>SQL</span>
                            <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>HTML</span>
                            <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>CSS</span>
                            <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>JavaScript</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='   transition-all mx-10 bg-navy-800 border-2 border-fuchsia-700  md:border-white hover:border-fuchsia-700 rounded-2xl md:ml-32 md:mr-32 mb-16'>
                <div className=' p-4 flex flex-col gap-x-6 md:flex-row  items-center'>
                    <Imagen src={ControlDeGastos} alt='Imagen proyecto' />
                    <div className='flex flex-col w-82 md:w-auto  '>
                        <h2 className='text-white text-center hoper:shadow-xl border-l-2 border-r-2 border-fuchsia-700 text-4xl text-bold text-left max-w-full uppercase mb-4'>Control de Gastos</h2>
                        <div className='m-4 md:ml-0 flex flex-col md:flex-row'>
                            <a target='_blanck' href="https://control-de-gastos-r.netlify.app/" className=' text-fuchsia-700 text-bold border-2 hover:border-none border-fuchsia-700 transition-all hover:text-3xl hover:bg-white rounded-md m-2 md:m-0 text-center bg-navy-800 text-2xl p-4 md:mr-10'>Deployed🚀</a>
                            <a target='_blanck' href="https://github.com/JoaquinFreire/control-de-gastos" className=' text-fuchsia-700 text-bold border-2 hover:border-none border-fuchsia-700 transition-all hover:text-3xl hover:bg-white rounded-md m-2 md:m-0 text-center bg-navy-800 text-2xl p-4 md:mr-10'>Repository📁</a>
                        </div>
                        <p className='text-white text-md mx-6 md:mx-0 md:text-xl text-left'>Project for expense management based on a budget. Expenses can be deducted from the budget, as well as updated and deleted.</p>
                        <div className=' mx-6 md:mx-0 mt-2 text-center md:text-left'>
                            <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>React</span>
                            <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>LocalStorage</span>
                            <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>Swipe</span>
                            <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>HTML</span>
                            <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>CSS</span>
                            <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>JavaScript</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='   transition-all mx-10 bg-navy-800 border-2 border-fuchsia-700  md:border-white hover:border-fuchsia-700 rounded-2xl md:ml-32 md:mr-32 mb-16'>
                <div className=' p-4 flex flex-col gap-x-6 md:flex-row  items-center'>
                    <Imagen src={CotizadorCripto} alt='Imagen proyecto' />
                    <div className='flex flex-col w-82 md:w-auto  '>
                        <h2 className='text-white text-center hoper:shadow-xl border-l-2 border-r-2 border-fuchsia-700 text-4xl text-bold text-left max-w-full uppercase mb-4'>Cotizador Criptos</h2>
                        <div className='m-4 md:ml-0 flex flex-col md:flex-row'>
                            <a target='_blanck' href="https://cotizador-r.netlify.app/" className=' text-fuchsia-700 text-bold border-2 hover:border-none border-fuchsia-700 transition-all hover:text-3xl hover:bg-white rounded-md m-2 md:m-0 text-center bg-navy-800 text-2xl p-4 md:mr-10'>Deployed🚀</a>
                            <a target='_blanck' href="https://github.com/JoaquinFreire/cotizador-cripto-react" className=' text-fuchsia-700 text-bold border-2 hover:border-none border-fuchsia-700 transition-all hover:text-3xl hover:bg-white rounded-md m-2 md:m-0 text-center bg-navy-800 text-2xl p-4 md:mr-10'>Repository📁</a>
                        </div>
                        <p className='text-white text-md mx-6 md:mx-0 md:text-xl text-left'>Project using an API to provide quotes for the twenty most popular cryptocurrencies.</p>
                        <div className=' mx-6 md:mx-0 mt-2 text-center md:text-left'>
                            <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>React</span>
                            <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>API</span>
                            <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>St.Comp</span>
                            <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>HTML</span>
                            <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>CSS</span>
                            <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>JavaScript</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='   transition-all mx-10 bg-navy-800 border-2 border-fuchsia-700  md:border-white hover:border-fuchsia-700 rounded-2xl md:ml-32 md:mr-32 mb-16'>
                <div className=' p-4 flex flex-col gap-x-6 md:flex-row  items-center'>
                    <Imagen src={FestivalMusica} alt='Imagen proyecto' />
                    <div className='flex flex-col w-82 md:w-auto  '>
                        <h2 className='text-white text-center hoper:shadow-xl border-l-2 border-r-2 border-fuchsia-700 text-4xl text-bold text-left max-w-full uppercase mb-4'>Festival de Música</h2>
                        <div className='m-4 md:ml-0 flex flex-col md:flex-row'>
                            <a target='_blanck' href="https://joaquinfreireportafolio.netlify.app/festivalmusica/" className=' text-fuchsia-700 text-bold border-2 hover:border-none border-fuchsia-700 transition-all hover:text-3xl hover:bg-white rounded-md m-2 md:m-0 text-center bg-navy-800 text-2xl p-4 md:mr-10'>Deployed🚀</a>
                            <a target='_blanck' href="https://github.com/JoaquinFreire/festival-musica" className=' text-fuchsia-700 text-bold border-2 hover:border-none border-fuchsia-700 transition-all hover:text-3xl hover:bg-white rounded-md m-2 md:m-0 text-center bg-navy-800 text-2xl p-4 md:mr-10'>Repository📁</a>
                        </div>
                        <p className='text-white text-md mx-6 md:mx-0 md:text-xl text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem exercitationem. Veniam laborum aspernatur quas voluptatibus andus! Unde, maxime ex.</p>
                        <div className=' mx-6 md:mx-0 mt-2 text-center md:text-left'>
                            <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>SASS</span>
                            <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>Gulp</span>
                            <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>HTML</span>
                            <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>CSS</span>
                            <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>JavaScript</span>
                        </div>
                    </div>
                </div>
            </div>
            {mostrarTodos && (
                <>
                    <h2 className='text-center text-5xl text-fuchsia-700 mb-16 border-b-2 border-fuchsia-700 mx-32'>Mas..</h2>
                    <div className='   transition-all mx-10 bg-navy-800 border-2 border-fuchsia-700  md:border-white hover:border-fuchsia-700 rounded-2xl md:ml-32 md:mr-32 mb-16'>
                        <div className=' p-4 flex flex-col gap-x-6 md:flex-row  items-center'>
                            <Imagen src={BienesRaices} alt='Imagen proyecto' />
                            <div className='flex flex-col w-82 md:w-auto  '>
                                <h2 className='text-white text-center hoper:shadow-xl border-l-2 border-r-2 border-fuchsia-700 text-4xl text-bold text-left max-w-full uppercase mb-4'>Bienes Raices</h2>
                                <div className='m-4 md:ml-0 flex flex-col md:flex-row'>
                                    <a target='_blanck' href="#" className=' text-fuchsia-700 text-bold border-2 hover:border-none border-fuchsia-700 transition-all hover:text-3xl hover:bg-white rounded-md m-2 md:m-0 text-center bg-navy-800 text-2xl p-4 md:mr-10'>Deployed🚀</a>
                                    <a target='_blanck' href="#" className=' text-fuchsia-700 text-bold border-2 hover:border-none border-fuchsia-700 transition-all hover:text-3xl hover:bg-white rounded-md m-2 md:m-0 text-center bg-navy-800 text-2xl p-4 md:mr-10'>Repository📁</a>
                                </div>
                                <p className='text-white text-md mx-6 md:mx-0 md:text-xl text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem exercitationem. Veniam laborum aspernatur quas voluptatibus andus! Unde, maxime ex.</p>
                                <div className=' mx-6 md:mx-0 mt-2 text-center md:text-left'>
                                    <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>PHP</span>
                                    <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>PHP</span>
                                    <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>PHP</span>
                                    <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>HTML</span>
                                    <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>CSS</span>
                                    <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>JavaScript</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='   transition-all mx-10 bg-navy-800 border-2 border-fuchsia-700  md:border-white hover:border-fuchsia-700 rounded-2xl md:ml-32 md:mr-32 mb-16'>
                        <div className=' p-4 flex flex-col gap-x-6 md:flex-row  items-center'>
                            <Imagen src={BienesRaices} alt='Imagen proyecto' />
                            <div className='flex flex-col w-82 md:w-auto  '>
                                <h2 className='text-white text-center hoper:shadow-xl border-l-2 border-r-2 border-fuchsia-700 text-4xl text-bold text-left max-w-full uppercase mb-4'>Bienes Raices</h2>
                                <div className='m-4 md:ml-0 flex flex-col md:flex-row'>
                                    <a target='_blanck' href="#" className=' text-fuchsia-700 text-bold border-2 hover:border-none border-fuchsia-700 transition-all hover:text-3xl hover:bg-white rounded-md m-2 md:m-0 text-center bg-navy-800 text-2xl p-4 md:mr-10'>Deployed🚀</a>
                                    <a target='_blanck' href="#" className=' text-fuchsia-700 text-bold border-2 hover:border-none border-fuchsia-700 transition-all hover:text-3xl hover:bg-white rounded-md m-2 md:m-0 text-center bg-navy-800 text-2xl p-4 md:mr-10'>Repository📁</a>
                                </div>
                                <p className='text-white text-md mx-6 md:mx-0 md:text-xl text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem exercitationem. Veniam laborum aspernatur quas voluptatibus andus! Unde, maxime ex.</p>
                                <div className=' mx-6 md:mx-0 mt-2 text-center md:text-left'>
                                    <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>PHP</span>
                                    <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>PHP</span>
                                    <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>PHP</span>
                                    <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>HTML</span>
                                    <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>CSS</span>
                                    <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>JavaScript</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='   transition-all mx-10 bg-navy-800 border-2 border-fuchsia-700  md:border-white hover:border-fuchsia-700 rounded-2xl md:ml-32 md:mr-32 mb-16'>
                        <div className=' p-4 flex flex-col gap-x-6 md:flex-row  items-center'>
                            <Imagen src={BienesRaices} alt='Imagen proyecto' />
                            <div className='flex flex-col w-82 md:w-auto  '>
                                <h2 className='text-white text-center hoper:shadow-xl border-l-2 border-r-2 border-fuchsia-700 text-4xl text-bold text-left max-w-full uppercase mb-4'>Bienes Raices</h2>
                                <div className='m-4 md:ml-0 flex flex-col md:flex-row'>
                                    <a target='_blanck' href="#" className=' text-fuchsia-700 text-bold border-2 hover:border-none border-fuchsia-700 transition-all hover:text-3xl hover:bg-white rounded-md m-2 md:m-0 text-center bg-navy-800 text-2xl p-4 md:mr-10'>Deployed🚀</a>
                                    <a target='_blanck' href="#" className=' text-fuchsia-700 text-bold border-2 hover:border-none border-fuchsia-700 transition-all hover:text-3xl hover:bg-white rounded-md m-2 md:m-0 text-center bg-navy-800 text-2xl p-4 md:mr-10'>Repository📁</a>
                                </div>
                                <p className='text-white text-md mx-6 md:mx-0 md:text-xl text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem exercitationem. Veniam laborum aspernatur quas voluptatibus andus! Unde, maxime ex.</p>
                                <div className=' mx-6 md:mx-0 mt-2 text-center md:text-left'>
                                    <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>PHP</span>
                                    <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>PHP</span>
                                    <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>PHP</span>
                                    <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>HTML</span>
                                    <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>CSS</span>
                                    <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>JavaScript</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='   transition-all mx-10 bg-navy-800 border-2 border-fuchsia-700  md:border-white hover:border-fuchsia-700 rounded-2xl md:ml-32 md:mr-32 mb-16'>
                        <div className=' p-4 flex flex-col gap-x-6 md:flex-row  items-center'>
                            <Imagen src={BienesRaices} alt='Imagen proyecto' />
                            <div className='flex flex-col w-82 md:w-auto  '>
                                <h2 className='text-white text-center hoper:shadow-xl border-l-2 border-r-2 border-fuchsia-700 text-4xl text-bold text-left max-w-full uppercase mb-4'>Bienes Raices</h2>
                                <div className='m-4 md:ml-0 flex flex-col md:flex-row'>
                                    <a target='_blanck' href="#" className=' text-fuchsia-700 text-bold border-2 hover:border-none border-fuchsia-700 transition-all hover:text-3xl hover:bg-white rounded-md m-2 md:m-0 text-center bg-navy-800 text-2xl p-4 md:mr-10'>Deployed🚀</a>
                                    <a target='_blanck' href="#" className=' text-fuchsia-700 text-bold border-2 hover:border-none border-fuchsia-700 transition-all hover:text-3xl hover:bg-white rounded-md m-2 md:m-0 text-center bg-navy-800 text-2xl p-4 md:mr-10'>Repository📁</a>
                                </div>
                                <p className='text-white text-md mx-6 md:mx-0 md:text-xl text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem exercitationem. Veniam laborum aspernatur quas voluptatibus andus! Unde, maxime ex.</p>
                                <div className=' mx-6 md:mx-0 mt-2 text-center md:text-left'>
                                    <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>PHP</span>
                                    <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>PHP</span>
                                    <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>PHP</span>
                                    <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>HTML</span>
                                    <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>CSS</span>
                                    <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>JavaScript</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='   transition-all mx-10 bg-navy-800 border-2 border-fuchsia-700  md:border-white hover:border-fuchsia-700 rounded-2xl md:ml-32 md:mr-32 mb-16'>
                        <div className=' p-4 flex flex-col gap-x-6 md:flex-row  items-center'>
                            <Imagen src={BienesRaices} alt='Imagen proyecto' />
                            <div className='flex flex-col w-82 md:w-auto  '>
                                <h2 className='text-white text-center hoper:shadow-xl border-l-2 border-r-2 border-fuchsia-700 text-4xl text-bold text-left max-w-full uppercase mb-4'>Bienes Raices</h2>
                                <div className='m-4 md:ml-0 flex flex-col md:flex-row'>
                                    <a target='_blanck' href="#" className=' text-fuchsia-700 text-bold border-2 hover:border-none border-fuchsia-700 transition-all hover:text-3xl hover:bg-white rounded-md m-2 md:m-0 text-center bg-navy-800 text-2xl p-4 md:mr-10'>Deployed🚀</a>
                                    <a target='_blanck' href="#" className=' text-fuchsia-700 text-bold border-2 hover:border-none border-fuchsia-700 transition-all hover:text-3xl hover:bg-white rounded-md m-2 md:m-0 text-center bg-navy-800 text-2xl p-4 md:mr-10'>Repository📁</a>
                                </div>
                                <p className='text-white text-md mx-6 md:mx-0 md:text-xl text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem exercitationem. Veniam laborum aspernatur quas voluptatibus andus! Unde, maxime ex.</p>
                                <div className=' mx-6 md:mx-0 mt-2 text-center md:text-left'>
                                    <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>PHP</span>
                                    <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>PHP</span>
                                    <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>PHP</span>
                                    <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>HTML</span>
                                    <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>CSS</span>
                                    <span className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>JavaScript</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </>
            )}
            <div className='text-center md:text-right md:mr-32'>
                <button onClick={toggleMostrarTodos} className='text-fuchsia-700 text-bold border-2 border-fuchsia-700 hover:bg-gray-300 transition-all text-xl py-2 px-6 bg-white rounded-md  text-center'>{mostrarTodos ? 'Mostrar menos...' : 'Mostrar todos...'}</button>
            </div>



        </>
    )
}
/* 

https://github.com/JoaquinFreire/festival-musica
https://joaquinfreireportafolio.netlify.app/festivalmusica/
*/
export default Proyects