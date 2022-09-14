/* Ejercicio 1 Condicionales*/

/* function puedeVerPelicula(edad, tieneAutorizacion) {
    if(edad >= 15) {
        return console.log(true)
    } else if (tieneAutorizacion) {
        return console.log(true)
    } else {
        return console.log(false)
    }
}

puedeVerPelicula(12, false) // false
puedeVerPelicula(12, true)  // true
puedeVerPelicula(16, false) // true
puedeVerPelicula(18, true) */


/* Ejercicio 1 Bucles*/

/* function obtenerIndice(valor, array) {

    for (let index = 0; index < array.length; index++) {
        if(array[index] === valor) {
            return console.log(index)
        }
    }
    return console.log(-1)
}

obtenerIndice(12, [5, 7, 12, 34, 54, 2, 12]) // 2
obtenerIndice(83, [5, 7, 12, 34, 54, 2, 12]) // -1 */


/* Ejercicio 2 Bucles*/

function repetir(valor, cantidad) {
 
    let array = []
    for (let index = 0; index < cantidad; index++) {
        array.push(valor)
    }
    return console.log(array)
}

repetir('lovelace', 3) // ['lovelace', 'lovelace', 'lovelace']