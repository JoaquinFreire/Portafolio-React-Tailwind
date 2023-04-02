export default function descifrarTel(cifrado) {
    const numDigitos = Math.floor(cifrado.length / 2);
    const clave = cifrado.slice(numDigitos);
    let tel = "";
    for (let i = 0; i < numDigitos; i++) {
        const cifradoDigito = parseInt(cifrado[i]);
        const claveDigito = parseInt(clave[i]);
        const digito = (cifradoDigito - claveDigito + 10) % 10;
        tel += digito.toString();
    }
    return tel;
}

export function descifrar(cifrado) {
    const numDigitos = Math.floor(cifrado.length / 2);
    const clave = cifrado.slice(numDigitos);
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let palabra = "";
    for (let i = 0; i < numDigitos; i++) {
        const cifradoCaracter = cifrado[i];
        const claveCaracter = clave[i];
        const claveIndexCaracter = caracteres.indexOf(claveCaracter.toUpperCase());
        const cifradoIndex = caracteres.indexOf(cifradoCaracter.toUpperCase());
        const caracterIndex = (cifradoIndex - claveIndexCaracter + caracteres.length) % caracteres.length;
        const caracter = caracteres[caracterIndex];
        palabra += caracter;
    }
    return palabra;
}


function generarClave(numDigitos) {
    let clave = "";
    for (let i = 0; i < numDigitos; i++) {
        clave += Math.floor(Math.random() * 10);
    }
    return clave;
}

/* function cifrarTel(tel) {
  const clave = generarClave(tel.length);
  let cifrado = "";
  for (let i = 0; i < tel.length; i++) {
    const digito = parseInt(tel[i]);
    const claveDigito = parseInt(clave[i]);
    const cifradoDigito = (digito + claveDigito) % 10;
    cifrado += cifradoDigito.toString();
  }
  cifrado += clave; // agregamos la clave al final del cifrado
  return cifrado;
}

function descifrarTel(cifrado) {
  const numDigitos = Math.floor(cifrado.length / 2);
  const clave = cifrado.slice(numDigitos);
  let tel = "";
  for (let i = 0; i < numDigitos; i++) {
    const cifradoDigito = parseInt(cifrado[i]);
    const claveDigito = parseInt(clave[i]);
    const digito = (cifradoDigito - claveDigito + 10) % 10;
    tel += digito.toString();
  }
  return tel;
}

const tel = "5493513117202";
const telCifrado = cifrarTel(tel);
const descifrado1 = descifrarTel(telCifrado)
console.log("Cifrado ", telCifrado);
console.log("descrifrado ", descifrado1); */

/* function cifrarTel(tel) {
  const clave = generarClave(tel.length);
  let cifrado = "";
  for (let i = 0; i < tel.length; i++) {
    const digito = parseInt(tel[i]);
    const claveDigito = parseInt(clave[i]);
    const cifradoDigito = (digito + claveDigito) % 10;
    cifrado += cifradoDigito.toString();
  }
  cifrado += clave; // agregamos la clave al final del cifrado
  return cifrado;
} */