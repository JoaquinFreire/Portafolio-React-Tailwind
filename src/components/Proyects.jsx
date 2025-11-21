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
import Queso from "../img/proyectos/queso.png";
import Guitarla from "../img/proyectos/guitarla.png";
import Quioscoapp from "../img/proyectos/quioscoapp.png";
import CotizadorAuto from "../img/proyectos/cotizadorauto.png";
import Tesisreporte from "../img/proyectos/tesisreporte.png";

const Proyects = () => {
    const [mostrarTodos, setMostrarTodos] = useState(false);

    const toggleMostrarTodos = () => {
        setMostrarTodos(!mostrarTodos);
    };
    return (
        <>
            <div id='proyects' className="flex justify-center items-center mb-12 mt-32 ">
                <h1 className=" p-4 text-4xl text-[#FFFFFE] md:p-4 text-center md:text-5xl font-bold bg-[#017EAA] inline-block rounded-md">My Proyects</h1>
            </div>
            <Proyect
                imagen={Tesisreporte}
                titulo={'Proyecto de Tesis'}
                deployed={"https://joaquinfreireportafolio.netlify.app/bienesraices/index.html"}
                codigo={"https://software-de-cotizacion-1.onrender.com/operational-dashboard"}
                descripcion={"Part of a thesis project. This is just one report out of 15 that exist."} 
                skills={["C#", ".NET", "SQL", "Mongo", "React", "JavaScript", "CSS"]}
            />
            <Proyect
                imagen={Bienesraices}
                titulo={'Bienes Raices'}
                deployed={"https://joaquinfreireportafolio.netlify.app/bienesraices/index.html"}
                codigo={"https://github.com/JoaquinFreire/BienesRaices-MVC"}
                descripcion={"Project for buying and selling properties using OOP, with an administrator section including CRUD and the following tools."}
                skills={["MVC", "PHP", "SASS", "SQL", "HTML", "CSS", "JavaScript"]}
            />
            <Proyect
                imagen={Guitarla}
                titulo={'GuitarLA'}
                deployed={"https://guitar-la-next-js-lemon.vercel.app/"}
                codigo={"https://github.com/JoaquinFreire/GuitarLANextJs"}
                descripcion={"Project done in three possible ways with a lot of learning, about buying and selling guitars."}
                skills={["Next.js", "Database", "Strapi", "Remix", "React.js"]}
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
            <Proyect
                imagen={Quioscoapp}
                titulo={'Quiosco App'}
                deployed={"https://quioscoapp-j-f.up.railway.app/"}
                codigo={"https://github.com/JoaquinFreire/quioscoapp"}
                descripcion={"Schedule, ticket, date, and festival information visualization project, with maximum utilization of JavaScript."}
                skills={["SASS", "Gulp", "HTML", "CSS", "JavaScript"]}
            />

            {mostrarTodos && (
                <>
                    <h2 className='text-center text-5xl text-[#017EAA] mb-16 border-b-2 border-[#017EAA] mx-32'>All...</h2>
                    <Proyect
                        imagen={CotizadorAuto}
                        titulo={'Cotizador de Seguros de Auto'}
                        deployed={"https://cotizador-autos-jf.netlify.app/"}
                        codigo={"https://github.com/JoaquinFreire/CotizadorDeAutos"}
                        descripcion={"Car price quote tool with make, year, and plan, with API functionality."}
                        skills={["REST APIs", "React.js", "CSS", "HTML5", "JavaScript"]}
                    />
                    <Proyect
                        imagen={Blogcafe}
                        titulo={'Blog de Cafe'}
                        deployed={"https://blogdecafejoaquinf.netlify.app/"}
                        codigo={"https://github.com/JoaquinFreire/blog-cafe"}
                        descripcion={"Explore our Example Coffee Blog Website, a captivating online destination showcasing an array of the finest coffee recipes and expert tips."}
                        skills={["Practices", "HTML", "CSS", "JavaScript"]}
                    />
                    <Proyect
                        imagen={Queso}
                        titulo={'Queseria'}
                        deployed={"#"}
                        codigo={"https://github.com/JoaquinFreire/Queser-a"}
                        descripcion={"Programming Olympics project, cheese factory to create different types of cheeses and display them to the customer."}
                        skills={["PHP ", "HTML", "CSS", "JavaScript"]}
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
                        imagen={Tesisreporte}
                        titulo={'CitasVite'}
                        deployed={"#"}
                        codigo={"https://github.com/JoaquinFreire/citas_react_vite"}
                        descripcion={"React Vite project for saving appointments. Using Tailwind for design."}
                        skills={["Vite ", "React", "Tailwind ", "JavaScript"]}
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
                <button onClick={toggleMostrarTodos} className='text-[#017EAA] font-bold border-2 border-[#017EAA] hover:bg-[#FFFFFE] transition-all text-xl py-2 px-6 bg-[#FFFFFE] rounded-md  text-center'>{mostrarTodos ? 'Show Less...' : 'Show All...'}</button>
            </div>
        </>
    )
}
export default Proyects