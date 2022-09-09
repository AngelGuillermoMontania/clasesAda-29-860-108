
// FUNCIONES NOMBRADAS
/* function Saludar() {
    let edad = 30;
    let añoActual = 2022;
    let añoDeNac = añoActual - edad;
    return edad
}

console.log(saludar()) */


//  FUNCIONES ANONIMAS
/* const Saludar = function() {
    let edad = 30;
    let añoActual = 2022;
    let añoDeNac = añoActual - edad;
    return añoDeNac
}

console.log(Saludar()) */


//PARAMETROS
/* function Saludar(edad, año) {
    let edadActual = edad
    let añoActual = año;
    let añoDeNac = añoActual - edadActual;
    return añoDeNac
}

console.log(Saludar(25, 2025)) */

/* function Saludar(nombre, apellido, edad, ciudad) {
    return `Mi nombre es ${nombre}, mi apellido es ${apellido}, mi edad es ${edad} y vivo en ${ciudad}`
}

console.log(Saludar("Guillermo", "Montaña", 29, "San Juan"))
console.log(Saludar("Yanina", "Montaña", 19, "Bs As")) */

/* function Nacimiento(edad, año) {
    let edadActual = edad
    let añoActual = año;
    let añoDeNac = añoActual - edadActual;
    return añoDeNac
}

function Saludar() {
    return `Me llamo Guillermo, naci en el año ${Nacimiento(29,2022)}`
}

console.log(Nacimiento(29,2022))
console.log(Saludar()) */

/* function Nacimiento(edad, año) {
    let edadActual = edad
    let añoActual = año;
    let añoDeNac = añoActual - edadActual;
    return añoDeNac
} */

/* const Nacimiento = () => {
    let edadActual = 29
    let añoActual = 2022;
    let añoDeNac = añoActual - edadActual;
    return añoDeNac
} */

/* const Nacimiento = (edad, año) => {
    let edadActual = edad
    let añoActual = año;
    let añoDeNac = añoActual - edadActual;
    return añoDeNac
} */
// Los parentesis no hacen falta cuando tenemos un solo parametro, si no tiene parametro o tiene mas de uno si le debemos colocar
/* const Nacimiento = edad => {
    let edadActual = edad
    let añoActual = 2022;
    let añoDeNac = añoActual - edadActual;
    return añoDeNac
}
console.log(Nacimiento(29)) */

// const Nacimiento = edad => /* return implicito */ `Mi edad es ${29} años`

/* console.log(Nacimiento(29)) */

/* console.log() */