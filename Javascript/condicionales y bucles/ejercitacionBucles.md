# 馃攧 Estructuras de control: bucles

<br>
<br>

## *Obligatorios o recomendados:*
- Funciones del 1 al 6;
- Bucles FOR del 1 al 3
- Bucles WHILE del 1 al 5
- LOS EJERCICIOS PUEDEN RESOLVERSE CON CUALQUIER TIPO DE FOR, SI PIDO AL MENOS 2 EJERCICIOS CON CADA METODO(For y While). PUEDEN INVESTIGAR POR SUS CUENTAS

<br>
<br>

## Funciones

### `1) obtenerIndice(valor, array)`

Crear una funci贸n `obtenerIndice` que tome como argumento un valor cualquiera `valor` y un array cualquiera `array` y devuelva el 铆ndice del _primer 铆tem_ con dicho valor en el array, o -1 si no hay ninguno.

```javascript
obtenerIndice(12, [5, 7, 12, 34, 54, 2, 12]) // 2
obtenerIndice(83, [5, 7, 12, 34, 54, 2, 12]) // -1
```

### `2) repetir(valor, cantidad)`

Crear una funci贸n `repetir` que tome como argumento un valor `valor` y un n煤mero entero `cantidad`, y devuelva una array con `valor` repetido `cantidad` de veces.

```javascript
repetir('lovelace', 3) // ['lovelace', 'lovelace', 'lovelace']
repetir('a', 5) // ['a', 'a', 'a', 'a', 'a']
repetir('html', 0) // []
```

### `3) sumarImparesHasta(numero)`

Crear una funci贸n `sumarImparesHasta` que tome como argumento un n煤mero `numero` y que devuelva la suma de todos los impares empezando desde 0 hasta dicho `numero` inclusive.

```javascript
sumarImparesHasta(5) // 9 (1 + 3 + 5 = 9)
sumarImparesHasta(13) // 49
sumarImparesHasta(47) // 576
```

### `4) invertir(array)`

Crear una funci贸n `invertir` que tome como argumento un array `array` y que devuelva un array con los mismos valores pero en orden invertido.

```javascript
invertir([1, 2, 3]) // [3, 2, 1]
invertir([5, 7, 99, 34, 54, 2, 12]) // [12, 2, 54, 34, 99, 7, 5]
```

### `5) removerDuplicados(array)`

Crear una funci贸n `removerDuplicados` que tome como argumento un array `array` y que devuelva un array con los mismos valores de `array` pero sin valores duplicados.

```javascript
removerDuplicados([1, 1, 1]) // [1]
removerDuplicados([1, 1, 2, 2, 3, 3]) // [1, 2 ,3]
removerDuplicados([5, 23, 8, 5, 5, 44, 23]) // [5, 23 ,8, 44]
```

### `6) esSubconjunto(subconjunto, conjunto)`

Crear una funci贸n `esSubconjunto` que tome como argumento dos arrays, `subconjunto` y `conjunto`, y devuelva `true` si `subconjunto` es realmente subconjunto de `conjunto`, es decir, si todos los valores de `subconjunto` est谩n en `conjunto`.

```javascript
esSubconjunto([1], [1, 2, 3]) // true
esSubconjunto([1, 2, 3], [1, 2, 3, 4, 5]) // true
esSubconjunto([27, 49, 54], [54, 27, 8, 27, 49]) // true
esSubconjunto([1, 2, 3], [1, 2]) // false
esSubconjunto([1], [2, 3, 4]) // false
```

### `7) tieneBloque(array)`

Crear una funci贸n `hayBloque` que tome como argumento un array `array` y devuelva `true` si dicho `array` tiene un bloque de 3 o m谩s 铆tems consecutivos id茅nticos, o `false` si no tiene.

```javascript
tieneBloque([1, 2, 3]) // false
tieneBloque([1, 1, 1, 2, 3]) // true
tieneBloque([1, 2, 3, 3, 3]) // true
tieneBloque([1, 2, 3, 3, 3, 8]) // true
tieneBloque([1, 2, 2, 3, 3, 4]) // false
```

### `8) crearCuentaRegresiva(numeroInicial)`

Crear una funci贸n `crearCuentaRegresiva` que tome como argumento un n煤mero entero `numeroInicial` y que devuelva un array con cuyo primer 铆tem sea `numeroInicial` y los dem谩s 铆tems sean n煤meros enteros sucesivos descendientes, hasta llegar a 0.

```javascript
crearCuentaRegresiva(3) // [3, 2, 1, 0]
crearCuentaRegresiva(5) // [5, 4, 3, 2, 1, 0]
```

### `9) repetirLetras(palabra, cantidad)`

Crear una funci贸n `repetirLetras` que tome como argumento un string `palabra` y un n煤mero entero `cantidad`, y devuelva una string donde cada letra de `palabra` est茅 repetida `cantidad` de veces.

```javascript
repetirLetras('hola', 2) // 'hhoollaa'
repetirLetras('ada', 3) // 'aaadddaaa'
repetirLetras('ah!', 5) // 'aaaaahhhhh!!!!!'
repetirLetras('basta', 1) // 'basta'
```

### `10) sumarSeccion(array, comienzo, cantidad)`

Crear una funci贸n `sumarSeccion` que tome como argumento un array de n煤meros enteros `array`, un n煤mero entero `comienzo` y un n煤mero entero `cantidad`, y que devuelva la suma de `cantidad` de n煤meros de `array` empezando a contar desde el 铆tem con 铆ndice `comienzo`.

```javascript
sumarSeccion([2, 2, 4, 3, 10, 20, 5], 0, 3) // 8 (2 + 2 + 4 = 8)
sumarSeccion([2, 2, 4, 3, 10, 20, 5], 2, 4) // 37 (4 + 8 + 10 + 20 = 37)
sumarSeccion([2, 2, 4, 3, 10, 20, 5], 4, 1) // 3
```

### `11) capitalizarPalabras(string)`

Crear una funci贸n `capitalizarPalabras` tome como argumento un string `string` y devuelva un string donde cada palabra est谩 capitalizada (con la primera letra ma麓yuscula). Dejar las dem谩s letras como est谩n.

```javascript
capitalizarPalabras('Esto es un t铆tulo') // 'Esto Es Un T铆tulo'
capitalizarPalabras('hab铆a una vez') // 'Hab铆a Una Vez'
makeTitle('OMG') // 'OMG'
```

### `12) esPalindromo(palabra)`

Crear una funci贸n `esPalindromo` que tenga como par麓谩metro un string `palabra` y devuelva `true` si dicha palabra es pal铆ndroma, es decir, si puede leerse de igual manera de izquierda a derecha que de derecha a izquierda, o `false` sino.

```javascript
esPalindromo('ada') // true
esPalindromo('reconocer') // true
esPalindromo('mama') // false
esPalindromo('javascript') // false
```

**BONUS:** hacer que funcione con oraciones y no con palabras. [Ejemplos](https://es.wikipedia.org/wiki/Pal%C3%ADndromo#Ejemplos).

<br>
<br>
<br>

## Ejercicios con bucle `for`

### 1) 馃敘 N煤meros impares

Crear un programa que muestre en consola los n煤meros impares entre el 0 y el 20

### 2) 馃攳 N煤mero mayor o menor

Crear un programa que pregunte si se desea buscar el mayor o el menor n煤mero de un conjunto. Luego, preguntar entre cu谩ntos se desea buscar. Ir pidiendo ingresar uno por uno la cantidad de n煤meros que se eligi贸, y al finalizar mostrar el n煤mero mayor o menor de todos los ingresados seg煤n el elegido.

### 3) 鉂楋笍 Factorial

Crear un programa que pida ingresar un n煤mero, y muestre su factorial. Este se calcula multiplicando el mismo n煤mero y todos los n煤meros que le anteceden hasta el 1. Por ejemplo: 4 鈬? 4 _ 3 _ 2 \* 1 = 24

### 4) 鉁婐煠氣湆锔? Piedra, papel, tijera II

Al ejercicio de **Piedra, papel, tijera** de _condicionales_, agregarle la posibilidad de jugar la cantidad de rondas que se deseen. Por cada ronda, se debe mostrar ambas jugadas (usuario y computadora), qui茅n gano la ronda, puntaje parcial hasta el momento y rondas restantes. Al finalizar se debe indicar qui茅n gan贸. Ejemplo:

```
Ronda: 2 de 5
馃檷鈥嶁檧锔? Jugadora: Piedra
馃懢 Computadora: Tijera
Jugadora ha ganado esta ronda 馃帀
Puntaje: 2 (Jugadora) - 0 (Computadora)
```

### 5) 馃弮鈥嶁檧锔? Carrera

Crear un programa para controlar las vueltas de una deportista. Debe pedir al usuario la cantidad de vueltas que va a realizar e ir preguntando el tiempo en segundos de cada vuelta. Al final, se debe mostrar un mensaje listando los tiempos de cada vuelta y el promedio del tiempo de las vueltas (suma de las vueltas / cantidad de vueltas). Ejemplo:

```
Cantidad de vueltas: 3
Vuelta 1: 133s
Vuelta 2: 145s
Vuelta 3: 166s
鈴? Promedio: 144.45s
```

### 6) 馃搥 Playlist

Crear un programa que pida al usuario ingresar el nombre de una playlist y cu谩ntas canciones desea agregar a la misma. Luego debe ir pidiendo agregar la cantidad de canciones elegidas de a una. Se debe ir mostrando la cantidad de canciones que quedan por agregar y la playlist con los temas hasta el momento a medida que se va a actualizando. Al finalizar mostrar un mensaje con el nombre de la playlist y la lista de canciones.

<br>
<br>
<br>

## Ejercicios con bucle `while`

### 1) 馃攼 M煤ltiples intentos

Crear un programa que pida ingresar usuario y contrase帽a. El programa debe permitir hasta 3 intentos, cuando el usuario y/o la contrase帽a sean incorrectos. Si se ingresa correctamente ambos antes de 3 intentos err贸neos, debe mostrar un mensaje de bienvenida. Si se ingresan 3 intentos err贸neos, debe mostrar un mensaje de error y terminar el programa. El usuario y la contrase帽a ya deben estar guardadas en variables.

### 2) 馃 Adivinar palabra

Crear un programa que elija una palabra al azar de un conjunto de palabras posibles, y permita al usuario intentar adivinarla. Por cada intento sucesivo, el programa debe ir mostrando como pista la palabra de forma parcial, empezando con la primera letra y agregando una letra a la vez. El programa debe terminar cuando se adivina la palabra o se muestran todas las letras de la misma. Por ejemplo, si la palabra a adivinar es LOVELACE, mostrar como sugerencia primero L, luego LO, luego LOV, luego LOVE, luego LOVEL, etc.

### 3) 馃Ж Explosi贸n

Crear un programa que permita ingresar una serie de n煤meros separados por espacio. El programa debe disminuyendo cada n煤mero en 1 por ronda e ir mostrando el resultado (en consola, o en un string concatenado) hasta que todos lleguen a 0 (cuando lleguen a no deben seguir disminuyendo) y se produzca la explosi贸n. Ejemplo

```
鈴? 3 1 0 2
鈴? 2 0 0 1
鈴? 1 0 0 0
馃挜馃挜馃挜馃挜馃挜
```

## 4)馃摑 Lista de tareas

- Crear un programa que tenga un men煤 con las siguientes opciones:
  - **AGREGAR TAREA:** debe pedir al usuario ingresar una tarea y agregarla a la lista de tareas
  - **MODIFICAR TAREA:** debe pedir al usuario ingresar el n煤mero de tarea que se desea modificar, mostrarla, y pedir que ingrese la tarea a reemplazarla o modificarla
  - **ELIMINAR TAREA:** debe pedir al usuario ingresar el n煤mero de tarea a eliminar, mostrarla, y pedirle confirmar si desea eliminarla o no
  - **VER TAREAS:** debe listar todas las tareas hasta el momento
  - **SALIR:** debe terminar la ejecuci贸n del programa
- El programa debe mostrar el men煤 de opciones, y permitir ingresar una opci贸n. Si la opci贸n ingresada es incorrecta, debe mostrar nuevamente el men煤. Si se elige SALIR, debe terminar el programa. Si se elige alguna de las otras opciones, debe realizar las acciones correspondientes, y una vez terminada, volver al men煤 de opciones.

### 5) 馃彎 Isla desierta

- Crear un programa que permita mover un barco hacia una isla. El programa debe permitir ingresar los valores AVANZAR o RETROCEDER, siendo que AVANZAR acerca el barco un espacio hacia la isla y RETROCEDER lo aleja. El programa debe terminar cuando el barco llega a la isla. Ejemplo:

```
鉀碉笍馃寠馃寠馃寠馃彎
// AVANZAR
馃寠鉀碉笍馃寠馃寠馃彎
// AVANZAR
馃寠馃寠鉀碉笍馃寠馃彎
// RETROCEDER
馃寠鉀碉笍馃寠馃寠馃彎
// AVANZAR
馃寠馃寠鉀碉笍馃寠馃彎
// AVANZAR
馃寠馃寠馃寠鉀碉笍馃彎
隆Has llegado a la isla!
```

### 6) 馃彠 ATM II

- Crear un programa que tenga un dinero inicial
- El programa tambi茅n deber谩 contar con un men煤 con las siguientes opciones:
  - **EXTRAER:** debe pedir al usuario cu谩nto desea extraer y _si el dinero a extraer es menor o igual al saldo actual_, restar el dinero extra铆do al saldo
  - **DEPOSITAR:** debe pedir al usuario la cantidad a ingresar y sumarla al saldo actual
  - **CONSULTAR SALDO:** debe mostrar el saldo actual
  - **VER 脷LTIMOS MOVIMIENTOS:** debe mostrar una lista de los 煤ltimos moviemientos realizados
  - **SALIR:** debe terminar la ejecuci贸n del programa
- El programa debe mostrar el men煤 de opciones, y permitir ingresar una opci贸n. Si la opci贸n ingresada es incorrecta, debe mostrar nuevamente el men煤. Si se elige SALIR, debe terminar el programa. Si se elige alguna de las otras opciones, debe realizar las acciones correspondientes, y una vez terminada, volver al men煤 de opciones. Las acciones de EXTRAER y DEPOSITAR y CONSULTAR SALDO deben registrarse cada vez que se realicen para poder consultarse luego, por ejemplo:

```
 ULTIMOS MOVIMIENTOS
 - Depositado: $550
 - Extraido: $1000
 - Consultado saldo: $3400
 - Depositado: $100
```

### 7) 馃帹 Sim贸n dice II

Replicar el juego de Sim贸n dice. El programa debe mostrar una secuencia de colores, agregando por cada ronda que pase otro color m谩s. El usuario debe ingresar los colores de la secuencia uno por uno. Si erra la secuencia (es decir, si ingresa alg煤n color mal), el programa debe terminar. Los colores posibles son: rojo, azul, verde y amarillo. Hay dos variantes posibles: o el juego contin煤a indefinidamente hasta que se erra la secuencia, y muestra cu谩ntas rondas se sobrevivi贸, o el programa permite elegir al principio cu谩ntas rondas se desea hacer, y mostrar un mensaje de victoria si se llega a esa cantidad de rondas sin errarle a la secuencia.

### 8) 馃懢 Monstruo

Crear un juego de combate contra un monstruo.

- El juego debe contar con las siguientes variables:
  - Vida jugadora
  - Vida monstruo
  - Cantidad de pociones
  - Ataque m谩ximo jugadora
  - Ataque m谩ximo monstruo
  - Curaci贸n m谩xima poci贸n
- Todos los valores anteriores deben ser n煤meros enteros (a elecci麓贸n)
- El juego debe tener las siguientes acciones posibles:
  - **ATACAR MONSTRUO:** genera un n煤mero aleatorio entre 1 y `Ataque m谩ximo jugadora` y lo resta a `Vida monstruo`
  - **TOMAR POCION:** genera un n煤mero aleatorio entre 1 y `Curaci贸n m谩xima poci贸n` y lo suma a `Vida jugadora` y resta 1 a `Cantidad de pociones`
  - **BUSCAR POCION:** genera un n煤mero entre 1 y 4, si sale 1 suma una poci贸n, sino no encuentra nada
  - **SALIR:** termina el programa
- En todo momento se debe mostrar un mensaje de lo que est谩 pasando
- Luego de cada acci贸n, el monstruo ataca a la jugadora y le resta a `Vida jugadora` un n煤mero aleatorio entre 1 y `Ataque m谩ximo monstruo`
- Luego del ataque del monstruo, se debe mostrar la vida de ambos
- El programa termina cuando o la jugadora o el monstruo se quedan con vida igual o menor a 0
- Mostrar un mensaje con el resultado final

### 9) 馃挷Cara o cruz

Crear un programa que permita escoger entre cara o cruz. El programa luego debe generar un resultado aleatorio y mostrar si se acert贸 o no. El programa debe mostrar en cada vuelta cu谩ntas rondas seguidas acertadas van, y si en alg煤n momento se erra, reiniciar el contador a 0. Tambi茅n debe llevar una cuenta de la cantidad m谩xima de rondas seguidas que se hizo sin errar. Cuando se ingresa la palabra SALIR, en vez de CARA o CRUZ, el programa debe mostrar la cantidad m谩xima de rondas seguidas acertadas junto a un mensaje de despedida, y terminar su ejecuci贸n.

### 10) 馃幘 Tenis

Crear un programa para llevar la cuenta del puntaje de un partido de tenis. Debe pedir inicialmente por los nombres de las jugadoras, y luego ir pidiendo el nombre de la ganadora de cada set, y mostrando el puntaje actualizado. Si alguna de las dos llega a los 3 puntos, el programa debe terminar y anunciar la ganadora

### 11) 鈿栵笍 Mayor o menor

Crear un programa que elija un n煤mero al azar entre 1 y 10. El programa debe luego pedir al usuario que intente adivinar el n煤mero. Por cada intento, debe avisar si el n煤mero a adivinar es mayor o menor que el n煤mero ingresado. El programa debe terminar cuando se adivina el n煤mero.