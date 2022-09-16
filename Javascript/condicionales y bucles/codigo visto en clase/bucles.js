/* 
 ------ Estructura While ------
while (condition) {
    
} */

/* const nombres = ["Yanina", "Ada", "Guille"] */
let count = 0
// 1
// 2
// 3

/* while (count < nombres.length) {
    console.log(nombres[count])
    count++
} */
// nombres.length SIEMPRE VA A VALER 3
// Primera instancia:   count vale 0 y se hace la condicion y va a imprimit YANINA
// Segunda instancia: count vale 1 y se hace la condicion y va a imprimit ADA
// Tercera instancia: count vale 2 y se hace la condicion y va a imprimit Guille
// Cuarta instancia: count vale 3 y al ser igual que nombres.length, corta la ejecucion



/* 
     ---- ESTRUCTURA DE UN FOR ------
for (El contador; La condicion; Suma) {
    const element = array[index];
    
} */
let numero = 10
for (let count = 0; count < numero; count++) {
    if(count % 2 === 0) {
        console.log(count, "Es par")
    } else {
        console.log(count, "No es par")
    }
}

// Primera instancia: al finalizar el codigo a ejecutar (if, else), va a sumar 1 a count
// Segunda instancia: El count inicia en 1, count es menor que numero? como da true, ejecuta el
// codigo. Al finalizar la ejecucion vuelve a sumar 1
// Tercera