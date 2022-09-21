const db = require("./db.json")
let newJson = JSON.stringify(db) // Stringify, convierte un objeto a formato JSON
let newObject = JSON.parse(newJson) // Parse, convierte de JSON a objeto JavaScript

console.log(newObject)