/* Ejercicio 1 Condicionales*/

/* function puedeVerPelicula(edad, tieneAutorizacion) {
    if(edad >= 15 || tieneAutorizacion) {
        return console.log(true)
    } else {
        return console.log(false)
    }
}

puedeVerPelicula(12, false) // false
puedeVerPelicula(12, true)  // true
puedeVerPelicula(16, false) // true
puedeVerPelicula(18, true)
 */

/* Ejercicio 1 Bucles*/

/* array.length = 7 
    count < 7 para que sea como maximo 6
*/

function obtenerIndice(valor, array) {

    /* for (let count = 0; count < array.length; count++) {
        if(array[count] === valor) {
            return console.log(count)
        }
    } */

    /* array.findIndex(num => num === valor) */
    return console.log(-1)
}

obtenerIndice(12, [5, 7, 12, 34, 54, 2, 12]) // 2
obtenerIndice(83, [5, 7, 12, 34, 54, 2, 12]) // -1


/* Ejercicio 2 Bucles*/

/* function repetir(valor, cantidad) {
 
    let array = []
    //for (let count = 0; count < cantidad; count++) {
     //   array[count] = valor
        //array.push(valor)
    //}


    //let count = 0
    //while (count < cantidad) {
    //    array[count] = valor
    //    count++
    //}
    return console.log("RESULTADO FINAL", array)
}

repetir('lovelace', 3) // ['lovelace', 'lovelace', 'lovelace'] */




/* function sumarImparesHasta(numero) {
    let suma = 0
    //suma va a valer 1, index vale 1 y lo va a sumar
    //suma va a vale 1, index vale 2 y no entra en el if
    //suma va a vale 4, index vale 3 y lo va a sumar a la variable
    for(let index = 0; index <= numero; index++) {
        if(index % 2 !== 0) {
            suma = suma + index
        }
    }
    return console.log(suma)
}

sumarImparesHasta(5) // 9 (1 + 3 + 5 = 9)
sumarImparesHasta(13) // 49
sumarImparesHasta(47) // 576
 */





/* Condicionales operadores logicos 2 */

function estaEnRango(valor, minimo, maximo) {
    if(valor >= minimo && valor <= maximo) {
        return console.log(true)
    } else {
        return console.log(false)
    }
}

/* 
&&     ||
 |      |
 |      |
and    or
 y      o
*/