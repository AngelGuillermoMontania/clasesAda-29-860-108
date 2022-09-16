const edades = [70, 15, 25, 40, 35]
/* console.log("original",edades) */
// Push (Agrega al final)
// Pop (Quita al final)

// Unshift (Agrega al inicio)
// Shift (Quita al inicio)

/* edades.push(7)
console.log("push",edades)

edades.pop()
console.log("pop",edades)

edades.pop()
console.log("pop",edades)

edades.unshift(30)
console.log("unshift", edades) */


/* console.log(edades.includes(25))
console.log(edades.includes(27)) */

/* console.log(edades.map(function(edad) {
    return edad * 2
})) */
/* console.log(edades.map(edad => edad * 2)) */

/* console.log(edades.reverse()) */

/* console.log(edades.filter(edad => edad >= 40)) */

/* console.log(edades.forEach(element => element * 2)) */


// Dado un array, devolver en orden invertido, aquellos que multiplicados por dos sean menores a 100

/* const ejerc = array => {
    let arrayInv = array.reverse()
    let arrayMult = arrayInv.map(num => num * 2)
    let arrayFilt = arrayMult.filter(num => num <= 100)
    console.log(arrayFilt)
}

ejerc(edades) */







/* OBJETOS */

{}

/* let persona = {
    nombre: "Helena",
    apellido: "Troya",
    edad: 35,
    ciudadesQueVisito: ["Troya", "Roma", "Persia"],
    saluda: () => "Hello soy Helena"
} */

let animal = {
    tipo: "Gato",
    edad: 2,
    saluda: (tipo, edad) => `Miauuuu, soy un ${tipo} y tengo ${edad}`
}


/* console.log(animal)
animal.color = "Negro"
console.log(animal.edad) */
console.log(Object.keys(animal))
console.log(Object.values(animal))