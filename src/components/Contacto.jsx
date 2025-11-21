import React, { useState } from "react";
import Modal from './Modal';
import styled from "@emotion/styled"
import Facebook from '../img/facebook.png'
import Linkedin from '../img/linkedin2.png'
import Whatsapp from '../img/whatsapp.png'
import Github from '../img/github.png'

const Imagen = styled.img`
    max-width: 250px;
    width: 40%;
    margin: 0 auto;
    display: block;
    border: 1px;
    border-radius: 10%;
    border-color: #ff26ff;

    @media (max-width: 768px) {
    max-width: 120px;
  }
`

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [mostrarModalWh, setMostrarModalWh] = useState(false); // modal para whatsapp


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
        // Acá agregar código para enviar el mensaje a través de WhatsApp

    };

    return (
        <>
        {mostrarModalWh && <Modal setMostrarModalWh = {setMostrarModalWh} mostrarModalWh={mostrarModalWh}/>}
        <section className="mt-36 mb-10" id="contact">
            <div className="flex justify-center items-center">
                <h1 className=" p-4 text-4xl text-[#FFFFFE] md:p-4 text-center md:text-5xl font-bold bg-[#017EAA] inline-block rounded-md">Connect with me</h1>
            </div>
            <div className="flex flex-col md:flex-row md:items-start items-center justify-center gap-x-36">
                <div className="md:w-full md:ml-20">
                    <div className="flex justify-center items-center">
                        <h2 className="mt-16 text-[#FFFFFE] p-2 text-center text-3xl font-bold bg-[#017EAA] inline-block rounded-md">Social Media</h2>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center border border-[#FFFFFE] bg-[#00101A] rounded-xl mt-10  ">
                        <div className="mt-10 md:mb-10">
                            <div className=" mb-10 hover:brightness-110 brightness-90 transition-all duration-300">
                                <a href="https://www.linkedin.com/in/joaquin-freire/" target="_black">
                                    <Imagen src={Linkedin} alt="Imagenes habilidades" />
                                    <h2 className="text-white text-center font-bold text-lg">LinkedIn</h2>
                                </a>

                            </div>
                            <div className="hover:brightness-110 brightness-90 transition-all duration-300">
                                <a href="https://www.facebook.com/profile.php?id=100083462095517" target="_black">
                                    <Imagen src={Facebook} alt="Imagenes habilidades" />
                                    <h2 className="text-white text-center font-bold text-lg">Facebook</h2>
                                </a>
                            </div>
                        </div>
                        <div className="mt-10 mb-10">
                            <div className=" mb-10 hover:brightness-110 brightness-90 transition-all duration-300">
                                <a href="https://github.com/JoaquinFreire" target="" >
                                    <Imagen src={Github} alt="Imagenes habilidades" />
                                    <h2 className="text-white text-center font-bold text-lg">Github</h2>
                                </a>
                            </div>
                            <div className="hover:brightness-110 brightness-90 transition-all duration-300">
                                <button onClick={() => setMostrarModalWh(true)}>
                                    <Imagen src={Whatsapp} alt="Imagenes habilidades" />
                                    <h2 className="text-white text-center font-bold text-lg">🔐Whatsapp</h2>
                                </button>

                            </div>
                        </div>

                    </div>

                </div>
                <div className="w-full">
                    <div className="flex justify-center items-center">
                        <h2 className="mt-16 text-[#FFFFFE] p-2 text-center text-3xl font-bold bg-[#017EAA] inline-block rounded-md">Contact Form</h2>
                    </div>
                    <form onSubmit={handleSubmit} className="mt-10 border rounded-md bg-[#00101A] p-7 m-20 border-[#FFFFFE] max-w-full ">
                        <div className="mt-4">
                            <label htmlFor="name" className="text-white block text-3xl">Name:</label>
                            <input
                                type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full h-10 rounded-lg  text-xl pl-2 " />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="email" className="text-white block text-3xl">Email:</label>
                            <input
                                type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required
                                className="w-full h-10 rounded-lg  text-xl pl-2" />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="message" className="text-white block text-3xl">Message:</label>
                            <textarea
                                id="message" value={message} onChange={(e) => setMessage(e.target.value)} required
                                className="w-full h-20 rounded-lg  text-xl pl-2"></textarea>
                        </div>
                        <button type="submit" className=" mt-2 text-[#FFFFFE] p-2 bg-[#017EAA] block w-full text-xl font-bold rounded-2xl">Submit</button>
                    </form>
                </div>

            </div>
        </section>
        </>
        

    );
}

export default ContactForm;
