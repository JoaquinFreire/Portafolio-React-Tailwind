import React from 'react'
import { useState } from 'react';
import Descifrador, { descifrar } from '../scripts/scripts.js'

const Modal = ({ setMostrarModal, mostrarModal, setMostrarModalWh, mostrarModalWh }) => {


    const [clave, setClave] = useState("");
    const [nombreWh, setNombreWh] = useState("")
    const passwordEncriptada = "9c1ffb91deb9953ca38853838203859920bb4543ee2eefde722fcd23214cf7ef"
    const passwordEncriptada2 = "3787dd16832a35080e5a6f4264526780c7a7be13e05b4592b05395d13520f5c7"
    const telCifrado = "78960888952452403575788043"

    async function generarHash(texto) {
        const encoder = new TextEncoder();
        const data = encoder.encode(texto);
        const hash = await crypto.subtle.digest('SHA-256', data);
        return Array.from(new Uint8Array(hash))
            .map(b => b.toString(16).padStart(2, "0"))
            .join("");
    }


    const verificarClave = () => {
        generarHash(clave).then((claveEncriptada) => {
            if (claveEncriptada === passwordEncriptada && mostrarModal) {
                window.open(`https://drive.google.com/file/d/1bMfw${descifrar('SS8HTO6GMWZ18804973997')}sLgXJJVSK7bMT_PgB/view?usp=sharing`, "_blank");
                cancelar();
            } else if (claveEncriptada === passwordEncriptada2 && mostrarModalWh) {
                window.open(`https://wa.me/${Descifrador(telCifrado)}?text=Hola+Joaquin+soy+${nombreWh}`, "_blank");
                cancelar();
            } else {
                alert("La clave ingresada no es correcta. Si usted no sabe la clave contactese con Joaquin para que le brinde una clave");
            }
        });
    };
    const cancelar = () => {
        switch (true) {
            case mostrarModal:
                setMostrarModal(false);
                break;
            case mostrarModalWh:
                setMostrarModalWh(false);
                break
            default:
                console.log('error');
                break;
        }
    }
    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
                <div className="inline-block align-bottom bg-navy-900 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                    <div>
                        {mostrarModalWh && (
                            <div className="mt-3 text-center sm:mt-5">
                                <h3 className="text-2xl leading-6 font-bold text-white">Nombre</h3>
                                <div className="mt-2">
                                    <input className="form-input py-2 px-3 block w-full border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-fuchsia-600" type="text" value={nombreWh} onChange={(e) => setNombreWh(e.target.value)} />
                                </div>
                            </div>
                        )}
                        <div className="mt-3 text-center sm:mt-5">
                            <h3 className="text-2xl leading-6 font-bold text-white">Ingrese la clave única</h3>
                            <div className="mt-2">
                                <input className="form-input py-2 px-3 block w-full border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-fuchsia-600" type="text" value={clave} onChange={(e) => setClave(e.target.value)} />
                            </div>
                        </div>

                    </div>
                    <div className="mt-5 sm:mt-6">
                        <div className="flex justify-center">
                            <button className="inline-flex justify-center px-4 py-2 text-sm font-bold text-white border-2 border-transparent rounded-full bg-fuchsia-500 hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-600" onClick={() => verificarClave()}>
                                Confirmar
                            </button>
                            <button className="ml-3 inline-flex justify-center px-4 py-2 text-sm font-medium text-white border-2 border-gray-300 rounded-full hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-600" onClick={() => cancelar()}>
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Modal;
