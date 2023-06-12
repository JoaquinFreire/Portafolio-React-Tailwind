import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

function ColorPicker() {
    const [color1, setColor1] = useState('#05011b');
    const [color2, setColor2] = useState('#ffffff');
    const [color3, setColor3] = useState('#ffffff');
    const [color4, setColor4] = useState('#ffffff');
    const [mostrarPaletas, setMostrarPaletas] = useState(false)

    const updateTailwindConfig = (hexValue) => {
        tailwindConfig.theme.extend.colors.navy['900'] = hexValue;
      }

    const toggleMostrarPaletas = () => {
        setMostrarPaletas(!mostrarPaletas);
    }

    const handleColorChange1 = (newColor) => {
        setColor1(newColor.hex);
    };
    const handleColorChange2 = (newColor) => {
        setColor2(newColor.hex);
    };
    const handleColorChange3 = (newColor) => {
        setColor3(newColor.hex);
    };
    const handleColorChange4 = (newColor) => {
        setColor4(newColor.hex);
    };
    
    return (
        <>
            <div className='fixed z-20 left-0 top-20 flex flex-col md:flex-row gap-6'>
                <button className='text-white border-2 rounded-2xl text-2xl bg-navy-800 w-24 h-10 md:mt-20' onClick={toggleMostrarPaletas}>{mostrarPaletas ? 'Paletas' : 'Ocultar'}</button>
                {mostrarPaletas && (
                    <>
                        <div className=''>
                            <ChromePicker color={color1} onChange={handleColorChange1} className='' />
                        </div>
                        <div className=''>
                            <ChromePicker color={color2} onChange={handleColorChange2} className='' />
                        </div>
                        <div className=''>
                            <ChromePicker color={color3} onChange={handleColorChange3} className='' />
                        </div>
                        <div className=''>
                            <ChromePicker color={color4} onChange={handleColorChange4} className='' />
                        </div>
                    </>

                )}

            </div>
           {/*  <Barra color1 = {color1} /> */}
        </>
    );
}

export default ColorPicker;
