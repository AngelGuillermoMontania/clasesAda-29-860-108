/* !    Negacion o distinto */



/* 


         ------- METODOS DE STRING Y NUMBER ----------


let numero = "5"

let numeroString = Number(numero)

console.log("numero en string", numero)
console.log("numero", numeroString) 
*/


/* let nombre = "AD A";

console.log(nombre.length) */

/* let nombre = "ADA";

console.log(nombre.includes("Z")) */

/* let nombre = "ADA";

console.log(nombre.toLowerCase()) */

/* let nombre = "ADA";

console.log(nombre[1]) */

/* let numero = 5;

console.log(Number.isInteger(numero)) */


/* let nombres = ["Guillermo", "Yanina", "Ada", ["Guille", "Yani", "A"]] */
//                |          |        |
//                |          |        |
//   indice:      0          1        2



/* console.log(nombres[2])
console.log(nombres.length) */

/* 

----- CONDICIONALES -----

if(condition) {
    codigo a ejecutar
} else if (condition) {
    codigo a ejecutar
} else {
    codigo a ejecutar
} */

/* let numero = 10 */

/* if(numero > 12) {
    console.log("Si es mayor a 12")
} else if(numero > 5) {
    console.log("Si es mayor a 5")
} else {
    console.log("Ninguna condicion se cumplio")
} */

/* if(numero <= 10) {
    console.log("Si es menor o igual a 10")
} else {
    console.log("Es mayor a 10")
} */


/* 
  ---------EJEMPLO PRACTICO DE CONDICIONES ---------
const edad = prompt("Cual es tu edad?")
if(edad > 18) {
    alert("Si puedes pasar al baile")
} else if (Number(edad) === 18) {
    alert("Puedes pasar pero ten cuidado")
} else {
    alert("No, no puedes ingresar. Eres menor de edad")
}
 */

/* 
     ----- ESTRUCTURA DE UN SWITCH ------
switch (key) {
    case value:
        
        break;

    default:
        break;
} */


/* let numero = 2 */

/* switch(numero <= 10) {
    case numero === 1:
        console.log("El numero es 1")
        break;
    case numero === 2: 
        console.log("El numero es 2")
        break;
    default:
        console.log("Es mayor a 2 y menor o igual a 10")
        break;
} */

/* Operador ternario */


/* numero >= 5 ? "Es mayor o igual a 5" : "Es menor a 5" */

/* let resultado */
/* if(numero >= 5) {
    resultado = "Es mayor o igual a 5"
} else {
    resultado = "Es menor a 5"
} */

/* console.log(resultado) */


/* 
    ---- PESUDOCODIGO DE IF ELSE ------ 

    Si el numero es mayor o igual a 5, el console me va a mostrar el string "Es mayor o igual a 5",
    y si no el console me va a mostrar "Es menor a 5"



    Soy la conductora, si el el semaforo esta en rojo, voy a mostrar un console que diga "No pase",
    si no si esta en amarillo voy a mostrar un console que diga "Precaucion",
    y si ninguna de las opciones anteriores se cumplen voy a mostrar "Pase"

*/