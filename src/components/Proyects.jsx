import React from 'react'
import styled from "@emotion/styled"
import BienesRaices from "../img/proyectos/bienesraices.png"
import ControlDeGastos from "../img/proyectos/controldegastos.png"
import CotizadorCripto from "../img/proyectos/cotizadorcripto.png"
import FestivalMusica from "../img/proyectos/festivalmusica.png"

const Imagen = styled.img`
    max-width: 430px;
    width: 170%;
    display: block; 

    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    overflow: hidden;
    @media (max-width: 768px) {
    /* max-width: 180px; */
    width: 100%;
    margin-bottom: 2rem;
  }
`

const Proyects = () => {
    return (
        <>
            <div className="flex justify-center items-center mb-12 ">
                <h1 className=" p-4 text-4xl text-white md:p-4 text-center md:text-5xl font-bold bg-fuchsia-600 inline-block rounded-md">My Proyects</h1>
            </div>
            <div className=' mx-10 bg-navy-800 border-2 border-fuchsia-700 rounded-2xl md:ml-32 md:mr-32 mb-32'>
                <div className=' p-4 flex flex-col gap-x-6 md:flex-row  items-center'>
                    <Imagen src={BienesRaices} alt='Imagen proyecto' />
                    <div className='flex flex-col w-82 md:w-auto  '>
                        <h2 className='text-white text-center hoper:shadow-xl border-l-2 border-r-2 border-fuchsia-700 text-4xl text-bold text-left max-w-full uppercase mb-4'>Bienes Raices</h2>
                        <div className='m-4 md:ml-0 flex flex-col md:flex-row'>
                            <a href="#" className=' text-fuchsia-700 text-bold border-2 hover:border-none border-fuchsia-700 transition-all hover:text-3xl hover:bg-white rounded-md m-2 md:m-0 text-center bg-navy-800 text-2xl p-4 md:mr-10'>Deployed🚀</a>
                            <a href="#" className=' text-fuchsia-700 text-bold border-2 hover:border-none border-fuchsia-700 transition-all hover:text-3xl hover:bg-white rounded-md m-2 md:m-0 text-center bg-navy-800 text-2xl p-4 md:mr-10'>Repository📁</a>
                        </div>
                        <p className='text-white text-xl text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem placeat deleniti architecto eius voluptatum exercitationem. Veniam laborum aspernatur quas voluptatibus andus! Unde, maxime ex.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
/* 
https://control-de-gastos-r.netlify.app/
https://github.com/JoaquinFreire/control-de-gastos

https://github.com/JoaquinFreire/BienesRaices-MVC
https://joaquinfreireportafolio.netlify.app/bienesraices/index.html

https://github.com/JoaquinFreire/cotizador-cripto-react
https://cotizador-r.netlify.app/

https://github.com/JoaquinFreire/festival-musica
https://joaquinfreireportafolio.netlify.app/festivalmusica/
*/
export default Proyects