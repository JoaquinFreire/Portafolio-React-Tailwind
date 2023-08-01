import styled from "@emotion/styled"

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
const Proyect = ({ imagen, titulo, deployed, codigo, descripcion, skills }) => {
    return (
        <div className='   transition-all mx-10 bg-navy-800 border-2 border-fuchsia-700  md:border-white hover:border-fuchsia-700 rounded-2xl md:ml-32 md:mr-32 mb-16'>
            <div className=' p-4 flex flex-col gap-x-6 md:flex-row  items-center'>
                <Imagen src={`/src/img/proyectos/${imagen}.png`} alt={`imagen proyecto ${titulo}`} />
                <div className='flex flex-col w-82 md:w-auto  '>
                    <h2 className='text-white text-center hoper:shadow-xl border-l-2 border-r-2 border-fuchsia-700 text-4xl text-bold  max-w-full uppercase mb-4'>{titulo}</h2>
                    <div className='m-4 md:ml-0 flex flex-col md:flex-row'>
                        <a target='_blanck' href={deployed} className=' text-fuchsia-700 text-bold border-2 hover:border-none border-fuchsia-700 transition-all hover:text-3xl hover:bg-white rounded-md m-2 md:m-0 text-center bg-navy-800 text-2xl p-4 md:mr-10'>Deployed🚀</a>
                        <a target='_blanck' href={codigo} className=' text-fuchsia-700 text-bold border-2 hover:border-none border-fuchsia-700 transition-all hover:text-3xl hover:bg-white rounded-md m-2 md:m-0 text-center bg-navy-800 text-2xl p-4 md:mr-10'>Repository📁</a>
                    </div>
                    <p className='text-white text-md mx-6 md:mx-0 md:text-xl text-left'>{descripcion}</p>
                    <div className=' mx-6 md:mx-0 mt-2 text-center md:text-left'>
                        {skills.map((skill, keys) => (
                            <span key={keys} className='text-black bg-yellow-500 text-center py-1 mr-4 px-2 mt-4 text-md md:text-lg md:py-2 md:px-4 inline-block font-bold'>{skill}</span>
                        ))};
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Proyect