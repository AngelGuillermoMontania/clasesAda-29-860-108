//let array = ["C", "F", "B", "AB", "AZ", "AF"]

/* console.log(array.join("---")) */ //  "Ada---Guille---Yani"

//console.log(array.sort())

/* let persona = {
    nombre: "Ada",
    apellido: "Lovelace",
    edad: 30,
    saludar: function() {
        return `Hola, soy ${this.nombre} ${this.apellido}`
    }
}

console.log(persona.saludar())

for (const key in persona) {
    // Puede tomar el valor de clave o valor
    console.log("Claves: ", key)
    console.log("Valores:", persona[key])
} */

/* let sumaTotal = 0

let array = [5,8,15,32]

for (let i = 0; i < array.length; i++) {
    sumaTotal -= array[i]
} */



/* const persona = {
    nombre: "Ada",
    apellido: "Lovelace",
    edad: 30,
    ubicacion: "Rusia",
    nombreMadre: "djksah",
    saludar: function() {
        return `Hola, soy ${this.nombre} ${this.apellido}`
    }
} */

/* const array = [5,8,15,32] */

/* let { apellido, edad, ubicacion } = persona

console.log(apellido)
console.log(edad)
console.log(ubicacion) */


/* let personaCopia = {
    ...persona
}

let copiaArray = [
    ...array
]

persona.nombre = "ADA LOVELACE";
persona.apellido = ""
console.log(persona)
console.log(personaCopia) */
/* console.log(copiaArray) */

/* console.log(document.getElementById("saludo")) */
/* console.log(document.getElementsByClassName("nombre")) */
/* console.log(document.getElementsByTagName("p")) */

/* console.log(document.querySelector("#nombre")) */
/* console.log(document.querySelectorAll(".nombre")) */
/* console.log(document.querySelectorAll("p")) */

/* let etiquetaSaludo = document.querySelector("#saludo")
console.log(etiquetaSaludo.innerText)
etiquetaSaludo.innerText += ", soy Ada Lovelace"
console.log(etiquetaSaludo.innerText) */



/* let divContain = document.querySelector("#contain")
console.log(divContain.innerText)
console.log(divContain.innerHTML)
divContain.innerHTML = `<h3>Ya no soy un ul</h3>` */



let divContain = document.querySelector("#contain")
/* divContain. = "backgroundColor: #000000, width: 200px, height: 200px" */
/* console.log(nuevoDiv)
nuevoDiv.className = "errorInput"
console.log(nuevoDiv) */


/* const respuestaDelBack = [
    {
        id: "1",
        title: "producto1",
        img: "https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800"
    },
    {
        id: "2",
        title: "producto2",
        img: "https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800"
    }
]



let nuevoHtml = ""
for (let i = 0; i < respuestaDelBack.length; i++) {
    nuevoHtml += `<div class="card"><img src=${respuestaDelBack[i].img}></img><p>${respuestaDelBack[i].title}</p></div>`
}

divContain.innerHTML = nuevoHtml */

for (let index = 0; index < array.length; index++) {
    console.log("Hello")
    console.log("bye")
    const element = array[index];
}