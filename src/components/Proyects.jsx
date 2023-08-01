import Proyect from './Proyect';
import { useState } from 'react'
import Bienesraices from "../img/proyectos/bienesraices.png";
import Controldegastos from "../img/proyectos/controldegastos.png";
import Cotizadorcripto from "../img/proyectos/cotizadorcripto.png";
import Festivalmusica from "../img/proyectos/festivalmusica.png";
import Blogcafe from "../img/proyectos/blogcafe.png";
import Store from "../img/proyectos/store.png";
import Freelancer from "../img/proyectos/freelancer.png";
import Portafoliofcc from "../img/proyectos/portafoliofcc.png";

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
            <Proyect
                imagen={Bienesraices}
                titulo={'Bienes Raices'}
                deployed={"https://joaquinfreireportafolio.netlify.app/bienesraices/index.html"}
                codigo={"https://github.com/JoaquinFreire/BienesRaices-MVC"}
                descripcion={"Project for buying and selling properties using OOP, with an administrator section including CRUD and the following tools."}
                skills={["MVC", "PHP8", "SASS", "SQL", "HTML", "CSS", "JavaScript"]}
            />
            <Proyect
                imagen={Controldegastos}
                titulo={'Control de Gastos'}
                deployed={"https://control-de-gastos-r.netlify.app/"}
                codigo={"https://github.com/JoaquinFreire/control-de-gastos"}
                descripcion={"Project for expense management based on a budget. Expenses can be deducted from the budget, as well as updated and deleted."}
                skills={["React", "LocalStorage", "Swipe", "HTML", "CSS", "JavaScript"]}
            />
            <Proyect
                imagen={Cotizadorcripto}
                titulo={'Cotizador Criptos'}
                deployed={"https://cotizador-r.netlify.app/"}
                codigo={"https://github.com/JoaquinFreire/cotizador-cripto-react"}
                descripcion={"Project using an API to provide quotes for the twenty most popular cryptocurrencies."}
                skills={["React", "API", "St.Comp", "HTML", "CSS", "JavaScript"]}
            />
            <Proyect
                imagen={Festivalmusica}
                titulo={'Festival de Música'}
                deployed={"https://joaquinfreireportafolio.netlify.app/festivalmusica/"}
                codigo={"https://github.com/JoaquinFreire/festival-musica"}
                descripcion={"Schedule, ticket, date, and festival information visualization project, with maximum utilization of JavaScript."}
                skills={["SASS", "Gulp", "HTML", "CSS", "JavaScript"]}
            />

            {mostrarTodos && (
                <>
                    <h2 className='text-center text-5xl text-fuchsia-700 mb-16 border-b-2 border-fuchsia-700 mx-32'>Mas...</h2>
                    <Proyect
                        imagen={Blogcafe}
                        titulo={'Blog de Cafe'}
                        deployed={"https://blogdecafejoaquinf.netlify.app/"}
                        codigo={"https://github.com/JoaquinFreire/blog-cafe"}
                        descripcion={"Explore our Example Coffee Blog Website, a captivating online destination showcasing an array of the finest coffee recipes and expert tips."}
                        skills={["Practices", "HTML", "CSS", "JavaScript"]}
                    />
                    <Proyect
                        imagen={Store}
                        titulo={'Tienda FrontEND'}
                        deployed={"https://joaquinfreireportafolio.netlify.app/store/index.html"}
                        codigo={"https://github.com/JoaquinFreire/store"}
                        descripcion={"Example clothing store featuring unique designs inspired by the most popular programming languages and frameworks."}
                        skills={["BEM", "HTML", "CSS", "JavaScript"]}
                    />
                    <Proyect
                        imagen={Freelancer}
                        titulo={'Servicios Freelancer'}
                        deployed={"https://joaquinfreireportafolio.netlify.app/freelancer"}
                        codigo={"https://github.com/JoaquinFreire/freelancer"}
                        descripcion={"Example of what a website offering my freelance services would look like, providing a convenient way to get in touch with me."}
                        skills={["JavaScript", "HTML", "CSS", "BEM"]}
                    />
                    <Proyect
                        imagen={Portafoliofcc}
                        titulo={'Portafolio F.C.C'}
                        deployed={"https://joaquinfreireportafolio.netlify.app"}
                        codigo={"https://github.com/JoaquinFreire/Portafolio-Freecodecamp"}
                        descripcion={"Portfolio created while learning with FreeCodeCamp, showcasing published projects and a way to contact me."}
                        skills={["JavaScript", "HTML", "CSS"]}
                    />
                </>
            )}
            <div className='text-center md:text-right md:mr-32'>
                <button onClick={toggleMostrarTodos} className='text-fuchsia-700 text-bold border-2 border-fuchsia-700 hover:bg-gray-300 transition-all text-xl py-2 px-6 bg-white rounded-md  text-center'>{mostrarTodos ? 'Show Less...' : 'Show All...'}</button>
            </div>
        </>
    )
}
export default Proyects